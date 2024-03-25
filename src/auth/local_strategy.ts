import passport from "passport";
import { Strategy } from "passport-local";
import * as bcrypt from "bcrypt";

// Custom
import User from "../collections/User.js";

interface userInterface {
  _id?: string;
}

passport.serializeUser((user: userInterface, done) => {
  done(false, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await User.findById(id);
    if (!findUser) throw new Error("User not found");
    done(false, findUser);
  } catch (err) {
    done(err, false);
  }
});

export default passport.use(
  new Strategy(async (username, password, done) => {
    try {
      const foundUser = await User.findOne({ username });
      if (!foundUser) {
        throw new Error("User does not exist!");
      }
      const isSamePassword = await bcrypt.compare(String(password), foundUser.password);
      if (!isSamePassword) {
        throw new Error("Invalid Credentials!");
      }
      done(false, foundUser);
    } catch (err) {
      done(err, false);
    }
  })
);
