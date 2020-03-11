const express = require("express");
const path = require("path");
const API = require("./routes");
const PORT = process.env.PORT || 3030;
const app = express();
const mongoose = require('mongoose');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static assets

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//db connect
mongoose.connect(process.env.MONGODB_URI || process.env.DEV_MONGODB || "mongodb://localhost/devmunch", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
},(err)=>{
    if(err) {throw new Error(err)};
    console.log("connected to: " + (process.env.MONGODB_URI?process.env.MONGODB_URI: process.env.DEV_MONGODB ? process.DEV_MONGODB:"localhost"));
});

//API routes


//Other server calls
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
