import { Router, type Request, type Response } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import passport from "passport";
import "../auth/local_strategy.js";

// Custom
import { createUserValidationSchema } from "../utils/validationSchemas.js";
import User from "../collections/User.js";
import { hashPassword } from "../utils/password.js";

const router = Router();

router.post(
  "/register",
  checkSchema(createUserValidationSchema),
  async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send(result.array());
    }
    const data = matchedData(req);

    // Create the new user
    try {
      const hashedPassword = await hashPassword(data.password);
      const newUser = new User({ ...data, password: hashedPassword });
      await newUser.save();
      return res.status(201).send(newUser);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
);

router.post("/login", passport.authenticate("local"), (req, res) => {
  return res.send("Successfully logged in!");
});

export default router;
