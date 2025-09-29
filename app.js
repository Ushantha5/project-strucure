// Basic server setup
import express, { Router } from "express";

import userRoutes from "./router/userRouter.js";

const app = express();
const PORT = 3000;

// HTTP method handling
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
