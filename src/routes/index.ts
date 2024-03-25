import { Router } from "express";

// Custom
import settings from "./settings.js";
// import users from "./users.js";
import auth from "./auth.js";

const router = Router();

// router.use("/users", users);
router.use("/auth", auth);
router.use("/settings", settings);

export default router;
