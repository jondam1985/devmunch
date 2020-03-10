const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3030;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static assets

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//API routes

//Other server calls
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
