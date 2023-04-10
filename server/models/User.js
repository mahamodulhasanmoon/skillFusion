const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },

    username: {
      type: String,
     unique:[true, "username must be unique"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: [true, "email must be unique"],
      required: [true, "Email address is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 3,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1,
          }),
        message: "Password {VALUE} is not strong enough.",
      },
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Passwords don't match!",
      },
    },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },
    status: {
      type: String,
      enum: ["disabled", "verified", "active"],
      default: "verified",
    },

  },
  {
    timestamps: true,
  }
);

// middlewares 

userSchema.pre('save',  async function  (next) {

  try {

    const password = this.password
    const hashedPassword = bcrypt.hashSync(password)
    this.confirmPassword = undefined
    this.password = hashedPassword
  
  
    next();
    
  } catch (error) {
    next(error);
  }

})

// create a method for compare password

userSchema.methods.comparePassword = function (password,hash)  {
  const isPassValid = bcrypt.compareSync(password,hash)
  return isPassValid
}


const User = model("User", userSchema);

module.exports = User;
