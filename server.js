const express = require("express");
const path = require("path");
const API = require("./routes/api");
const PORT = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const apiRoutes = require('./controller/APIController');
const {resolve} = require('path');
const cors = require('cors');
require('dotenv').config({path: resolve(__dirname,"./.env")});

const bodyParser = require("body-parser");

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enforcing https:// (redirencting when call made to http://)
app.use((req, res, next) => {
	if (process.env.NODE_ENV == "production") {
		if (req.headers["x-forwarded-proto"] !== "https") {
			return res.redirect(`https://${req.headers.host}${req.url}`);
		}
		else {
			return next();
		}
	}
	else {
		return next();
	}
});


//Static assets

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));
}

//db connect
mongoose.connect(process.env.MONGODB_URI || process.env.DEV_MONGODB || "mongodb://localhost/devmunch", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
},(err)=>{
    if(err) {throw new Error(err)};
    console.log("connected to: " + (process.env.MONGODB_URI?process.env.MONGODB_URI: process.env.DEV_MONGODB ? process.env.DEV_MONGODB:"localhost"));
});

app.use(cors());
//internal API routes
app.use(apiRoutes);
//external API routes
app.use(API);

//Other server calls
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
