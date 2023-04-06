const Tuitions = require("../models/Tuitions.model")

exports.getTuitionService = async()=>{
    const products = await Tuitions.find({})
    return products

}