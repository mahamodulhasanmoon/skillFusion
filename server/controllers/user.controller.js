const {
  signupService,

  findUserByEmail: loginServiceById,
  findUserByEmail,
} = require("../services/user.service");

const { genarateToken } = require("../utils/tokens");

exports.createUser = async (req, res, next) => {
  try {
    const user = await signupService(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully created account",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "403 Bad Request",
      error: error.message,
    });
  }
};

// for login

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 01 . check email and password provided

    if (!email || !password) {
      return res.status(403).json({
        status: "failed",
        message: "Invalid email or password",
      });
    }

    // 02. provide info in controller

    const user = await loginServiceById(email);

    // 03 check user is registered or not   registered

    if (!user) {
      return res.status(403).json({
        status: "failed",
        message: "user not found",
      });
    }

    // 04. password valid or not 

    const isPassValid = user.comparePassword(password,user.password)

    if (!isPassValid) {
        return res.status(403).json({
            status: "failed",
            message: "invalid email or password",
          });
        
    }

    //05 . check accout disabled or actve

    if (!user.status === "verified") {

        return res.status(403).json({
            status: "failed",
            message: "please verify your account check your mailbox",
          });
        
    }

    // 06 . verify your account done now Genarate Token

    const token = genarateToken(user)
   // 07. remove password

   const {password:pwd, ...others} = user.toObject();


    //  send final response
    res.status(200).json({
      status: "success",
      message: "Successfully Logged in",
      data:{
        userInfo:others,
        token,
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "403 Bad Request",
      error: error.message,
    });
  }
};


exports.verifyTokenController = async(req, res, next) => {
try{

    const  user = await findUserByEmail(req.user?.email)
    res.status(200).json({
        status: "success",
          message: "User Logged in successfully",
          data: user
    })
}
    catch (error) {
        res.status(400).json({
          status: "503",
          message: "internal error",
          error: error.message,
        });
      }

}


exports.uploadProfilePicture = async(req,res,next)=>{
  try {

console.log(req.file.path)

    res.status(200).json({
      status: "success",
        message: "upload successfully",
       
  })
  }     catch (error) {
    res.status(400).json({
      status: "503",
      message: "internal error could not uploaded file",
      error: error.message,
    });
  }
}