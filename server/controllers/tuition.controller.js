//  all functions behind the seen works to contoller

const { getTuitionService } = require("../services/tuition.service");

exports.getTuitions= async(req,res,next)=>{
    try {
        
        const tuitions =await getTuitionService()
        res.status(200).json({
          status: 'success',
          data: tuitions
        })


    }  catch (error) {
        res.status(400).json({message: error.message});
      }
  
}