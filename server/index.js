// all dependencies

const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT ||5000


// mongoose  estublishes connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI , {
    dbName: `skillFusion`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
 

  })
.then(()=>{
    console.log('database connection successful')
})
.catch(err => console.error(err.message))

// all routes

// error handlers

app.listen(port,()=> console.log(`listening on ${port}`));




I am writing to express my interest in the Frontend Developer position at [Company]. As a highly skilled and motivated frontend developer with experience in [technical skills], I believe I would be a strong fit for this role.

In my current position at [Current Company], I have gained experience in [relevant experience] and have had the opportunity to work on a variety of projects, including [project examples]. I am confident that my skills and experience make me well-suited to contribute to the success of [Company].

I am excited about the opportunity to join [Company] and believe that I can make a valuable contribution to your team. Thank you for considering my application. I would welcome the opportunity to discuss my qualifications further.

Sincerely,
[Your Name]




