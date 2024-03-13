import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello");
});

app.listen(process.env.PORT, () => {
  console.log(`Started listening on port ${process.env.PORT}`);
});
