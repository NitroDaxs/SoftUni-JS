import express from "express";
import bodyParser from "body-parser";
import Post from "./models/Post.js";

const app = express();
const port = 3000;
const defaultAvatar = "/images/avatar.webp";

app.use(express.static("public"));

const postsArray = [];
let dbSeed1 = new Post(
  1,
  "First Post",
  "This is the first post",
  "John Doe",
  "1234",
  new Date().toDateString(),
  "Health",
  defaultAvatar
);
postsArray.push(dbSeed1);
let dbSeed2 = new Post(
  2,
  "Second Post",
  "This is the second post",
  "John Doe",
  "1234",
  new Date().toDateString(),
  "Health",
  defaultAvatar
);
postsArray.push(dbSeed2);
let dbSeed3 = new Post(
  3,
  "Third Post",
  "This is the third post",
  "John Doe",
  "1234",
  new Date().toDateString(),
  "Technology",
  defaultAvatar
);
postsArray.push(dbSeed3);

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index.ejs", { posts: postsArray });
});

app.get("/home", (req, res) => {
  res.render("index.ejs", { posts: postsArray });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/create", (req, res) => {
  let date = new Date();
  let currentPost = new Post();
  if (req.body.avatarUrl === "") {
    currentPost = new Post(
      postsArray.length + 1,
      req.body.title,
      req.body.textContent,
      req.body.author,
      req.body.password,
      date.toDateString(),
      req.body.category,
      defaultAvatar
    );
  } else {
    currentPost = new Post(
      postsArray.length + 1,
      req.body.title,
      req.body.textContent,
      req.body.author,
      req.body.password,
      date.toDateString(),
      req.body.category,
      req.body.avatarUrl
    );
  }

  postsArray.push(currentPost);
  res.redirect("/");
});

app.get("/details/:id", (req, res) => {
  const postId = req.params.id;
  let currentPost = postsArray.find((post) => post.id === parseInt(postId));
  if (currentPost === undefined) {
    res.render("error404.ejs");
    return;
  }
  res.render("details.ejs", { post: currentPost });
});

app.get("/delete/:id", (req, res) => {
  const postId = Number(req.params.id);
  let currentPost = postsArray.find((post) => post.id === postId);
  if (currentPost === undefined) {
    res.render("error404.ejs");
    return;
  }
  res.render("delete.ejs", { post: currentPost });
});

app.post("/delete/:id", (req, res) => {
  const postId = Number(req.params.id);
  if (req.body.password !== postsArray[postId - 1].password) {
    res.redirect("/delete/" + postId);
    return;
  }
  postsArray.splice(
    postsArray.findIndex((post) => post.id === postId),
    1
  );
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const postId = Number(req.params.id);
  let currentPost = postsArray.find((post) => post.id === postId);
  if (currentPost === undefined) {
    res.render("error404.ejs");
    return;
  }
  res.render("edit.ejs", { post: currentPost });
});

app.post("/edit/:id", (req, res) => {
  const postId = Number(req.params.id);
  let currentPost = postsArray.find((post) => post.id === postId);
  if (currentPost === undefined) {
    res.render("error404.ejs");
    return;
  }
  if (req.body.password !== currentPost.password) {
    res.redirect("/edit/" + postId);
    return;
  }
  currentPost.title = req.body.title;
  currentPost.textContent = req.body.textContent;
  currentPost.author = req.body.author;
  currentPost.category = req.body.category;
  res.redirect("/details/" + postId);
});

app.get("/filter", (req, res) => {
  if (req.query.category === "All") {
    res.render("index.ejs", { posts: postsArray });
    return;
  }
  const category = req.query.category;
  let filteredPosts = postsArray.filter((post) => post.category === category);
  res.render("index.ejs", { posts: filteredPosts });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
