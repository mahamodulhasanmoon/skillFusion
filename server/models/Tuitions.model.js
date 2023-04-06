const Mongoose  = require("mongoose");

const tuitionSchema= Mongoose.Schema({
    

   
   
    
},{
    timestamps: true,
});
// make models for this schemas 

const Tuitions = Mongoose.model('Tuitions', tuitionSchema)
module.exports = Tuitions