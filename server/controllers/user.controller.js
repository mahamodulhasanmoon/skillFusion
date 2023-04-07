const { signupService } = require("../services/user.service");

exports.createUser= async(req,res,next) => {

    try {
        const user = await signupService(req.body);
        res.status(200).json({
            status: "success",
            message: "Successfully created account",
            data:user
          });
        
    } catch (error) {
        res.status(400)
        .json({
            status:'failed',
            message: "403 Bad Request",
            error: error.message
        });
      }

}