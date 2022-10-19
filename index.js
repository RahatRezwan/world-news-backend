const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
   res.send("Hello from World news");
});

app.get("/categories", (req, res) => {
   res.send(categories);
});

app.get("/category/:id", (req, res) => {
   const id = req.params.id;
   if (id === "08") {
      res.send(news);
   } else {
      const categoryNews = news.filter((n) => n.category_id === id);
      res.send(categoryNews);
   }
});

app.get("/news", (req, res) => {
   res.send(news);
});

app.get("/news/:id", (req, res) => {
   const id = req.params.id;
   const selectedNews = news.find((n) => n._id === id);
   res.send(selectedNews);
});

app.listen(port, () => {
   console.log(`World News server is running on port ${port}`);
});
