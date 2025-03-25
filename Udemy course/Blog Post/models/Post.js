export default class Post {
  constructor(
    id,
    title,
    textContent,
    author,
    password,
    date,
    category,
    avatar
  ) {
    this.id = id;
    this.title = title;
    this.textContent = textContent;
    this.author = author;
    this.password = password;
    this.date = date;
    this.category = category;
    this.avatar = avatar;
  }
}
