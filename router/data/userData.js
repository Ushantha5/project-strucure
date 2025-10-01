router.get("/", (req, res) => {
  res.send("This is GET User...");
});

router.get("/:id", (req, res) => {
  res.send("This is GET one User...");
});

router.post("/", (req, res) => {
  res.send("This is Create User...");
});

router.put("/:id", (req, res) => {
  res.send("This is put one User...");
});

router.delete("/:id", (req, res) => {
  res.send("This is DELETE User...");
});

export default router;
