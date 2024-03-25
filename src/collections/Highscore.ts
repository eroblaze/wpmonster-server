import mongoose from "mongoose";

const highScoreSchema = new mongoose.Schema({
  wpm: mongoose.SchemaTypes.Number,
  chars: {
    total: mongoose.SchemaTypes.Number,
    correct: mongoose.SchemaTypes.Number,
    wrong: mongoose.SchemaTypes.Number
  },
  accuracy: mongoose.SchemaTypes.Number,
  words: {
    correct: mongoose.SchemaTypes.Number,
    wrong: mongoose.SchemaTypes.Number
  }
});

const HighScore = mongoose.model("HighScore", highScoreSchema);
export default HighScore;
