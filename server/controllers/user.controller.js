const {
  signupService,
  loginService,
  loginServiceById,
} = require("../services/user.service");
const bcrypt = require("bcryptjs")

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

    const isPassValid = bcrypt.compareSync(password,user.password)

    if (!isPassValid) {
        return res.status(403).json({
            status: "failed",
            message: "invalid email or password",
          });
        
    }

    //05 .


    //  send final response
    res.status(200).json({
      status: "success",
      message: "Successfully Logged in",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "403 Bad Request",
      error: error.message,
    });
  }
};
