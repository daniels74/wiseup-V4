const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;

// prcoess.env.PORT
// process.env.NODE_ENV => production or undifined

// middleware
app.use(cors());
app.use(express.json());  // allows access to the req.body
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm start
  app.use(express.static(path.join(__dirname, "wiseup-v4/build")))
}

//routes

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "wiseup-v3/build/index.html"))
})

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
