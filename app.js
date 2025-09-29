// Basic server setup
import express, { Router } from "express";

const app = express();
const PORT = 3000;

// HTTP method handling
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

router.get("/user", (req, res) => {
  res.send("This is GET user...");
});
app.user(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
