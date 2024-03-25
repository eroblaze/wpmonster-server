import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true
  },
  allTimeAverageWPM: {
    type: mongoose.SchemaTypes.Number,
    default: 0
  },
  last10AverageWPM: {
    type: mongoose.SchemaTypes.Number,
    default: 0
  }
});

const User = mongoose.model("user", UserSchema);
export default User;
