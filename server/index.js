const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");

const port = process.env.PORT || 8080;

// connect to database 

// database connection
mongoose.connect(process.env.DATABASE_URL)
.then(()=> console.log("database connection successfull" .green.bold))
.catch(err => console.log(`${err.message}` .red.bold))

app.listen(port, () => {
    console.log(`App is running on port ${port}`.bgMagenta.bold);
  });