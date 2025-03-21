import expess from "express";
let app = expess();
let port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>obicham solen karamel</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/miro", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/miro", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/miro", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
