import mongoose from "mongoose";

interface settingsI {
  words: "common" | "complex";
  time: 15 | 30 | 60;
  caret: "normal" | "block";
}

const settingsSchema = new mongoose.Schema({
  words: {
    type: mongoose.SchemaTypes.String,
    default: "common"
  },
  time: {
    type: mongoose.SchemaTypes.Number,
    default: 30
  },
  caret: {
    type: mongoose.SchemaTypes.String,
    default: "normal"
  }
});

const Settings = mongoose.model("setting", settingsSchema);
export default Settings;
