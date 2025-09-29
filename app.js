// Basic server setup
import express, { Router } from "express";

const app = express();
const PORT = 3000;
const router = express.Router();

// HTTP method handling
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

router.get("/users", (req, res) => {
  res.send("This is GET User...");
});

router.get("/users/:id", (req, res) => {
  res.send("This is GET one User...");
});

router.post("/users", (req, res) => {
  res.send("This is Create User...");
});

router.put("/users/:id", (req, res) => {
  res.send("This is put one User...");
});

router.delete("/users/:id", (req, res) => {
  res.send("This is DELETE User...");
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// // Basic server setup
// import express from 'express'

// const app = express()
// const router = express.Router();

// const PORT = 3000;

// // HTTP method handling
// app.get('/', (req, res) => {
//     res.send('Hello Express!');
// });

// // users routes
// router.get('/users', (req, res) => {
//     res.send('This is GET Users...')
// })
// router.get('/users/:id', (req, res) => {
//     res.send('This is GET one User...')
// })
// router.post('/users', (req, res) => {
//     res.send('This is Create Users...')
// })
// router.put('/users/:id', (req, res) => {
//     res.send('This is Update User...')
// })
// router.delete('/users/:id', (req, res) => {
//     res.send('This is Delete User...')
// })

// app.use(router)

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
