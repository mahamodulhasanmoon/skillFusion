const express = require('express')
const cors = require('cors')

const app = express()


//middlewares
app.use(express.json());
app.use(cors());

// routes   

app.get("/", (req, res) => {
    res.send("Server is Running in port " + process.env.PORT);
  });


module.exports = app