import { Router } from "express";

// Custom
import Settings from "../collections/Settings.js";

const router = Router();

router.get("/", (req, res) => {
  // Returns the settings for the current logged in user or the default settings
  console.log(req.user);
  res.send({ words: "simple", time: 15, caret: "normal" });
});

router.post("/", (req, res) => {
  // Updates the settings for the current logged in user
});

export default router;
