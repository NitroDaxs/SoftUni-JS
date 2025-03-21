import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>obicham solen karamel</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Telefon: 1234567</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>Mnogo obicham solen karamel</h1>");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
