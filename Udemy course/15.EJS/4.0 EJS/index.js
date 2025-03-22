import expess from "express";

const app = expess();
const port = 3000;

app.get("/", (req, res) => {
  const date = new Date();
  let day = date.getDay();
  let type = "";
  let adviceMsg = "";
  switch (day) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      type = "Working day";
      adviceMsg = "Work hard";
      break;
    case 5:
    case 6:
      type = "Weekend";
      adviceMsg = "Chill";
      break;
  }
  res.render("index.ejs", { dayType: type, advice: adviceMsg });
});
function day(date) {}

app.use(day);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
