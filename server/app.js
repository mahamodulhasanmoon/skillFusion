const express = require('express')
const cors = require('cors');
const tuitionRouter = require('./routes/TuitionRoute');
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser')
const app = express()


//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/uploads',express.static('uploads'))

// routes   



app.use('/api/v1/',tuitionRouter)
app.use('/api/v1/',authRouter)

app.get("/", (req, res) => {
    res.send("Server is Running in port " + process.env.PORT);
  });


module.exports = app