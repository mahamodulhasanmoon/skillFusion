const { signupService } = require("../services/user.service");

exports.createUser= async(req,res,next) => {

    try {
         user = await signupService(req.body);
        
    } catch (error) {
        res.status(400)
        .json({
            status:'failed',
            message: error.message
        });
      }

}