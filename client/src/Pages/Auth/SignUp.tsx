
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  useSignupUserMutation } from "../../Features/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../Features/auth/authSlice";
import { useDispatch } from "react-redux";


interface SignupFromValues {
  email: string;
  password: string;
  confirmPassword: string;
  name: String;
  username: String;
  role: String;
}

interface SignUpUserError {
  isError:Boolean;
  isLoading:Boolean;
  error:{
    data:{
      message:String;
    }
  };
  isSuccess:Boolean;
  data:Object;
  // add any other properties that the error object may have
}

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { register, formState: { errors }, handleSubmit } = useForm<SignupFromValues>();
  const [signupUser, {isError,error,data,isSuccess }] = useSignupUserMutation<SignUpUserError>()
const navigate = useNavigate()

  
  const dispatch = useDispatch()
  const msg = error?.data?.message
  console.log(data)
  
    const onSubmit = async(data: SignupFromValues) => {
   setErrorMessage("")
   await signupUser(data)
      
    };
  
    useEffect(()=>{
  
      if(isSuccess){
        dispatch(setUser(data))
        navigate('/')
  
      }else{
        if (isError) {
          
          
          setErrorMessage( 'unknown error occurred');
          
        }
        setTimeout(()=>{
          setErrorMessage("");
        }, 1500);
      }
  
    },[isSuccess,isError,navigate,dispatch,data])


  return (
    <div className='container mx-auto'>
      <div className="loggedin my-10">
        <h2 className='text-center text-2xl font-bold'>Welcome! to continue <br /> please log in here</h2>
        <div className="loggedInCart bg-white max-w-[400px] mx-auto my-10 border p-10">
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className='mt-5'>
              {/* <label htmlFor="email">Email or Username</label> <br /> */}
              <input type="text" placeholder='Enter your Name' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3'
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-[#ff0000]">This field is required</p>}
            </div>



            <div className='mt-5'>
              {/* <label htmlFor="email">Email or Username</label> <br /> */}
              <input type="text" placeholder='enter username' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3'
                {...register("username", { required: true })}
              />
              {errors.username && <p className=" text-[#ff0000]">This field is required</p>}
            </div>

            <div className='mt-5'>
              {/* <label htmlFor="email">Email or Username</label> <br /> */}
              <input type="email" placeholder='enter your email adress' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3'
                {...register("email", { required: true })}
              />
              {errors.email && <p className=" text-[#ff0000]">This field is required</p>}
            </div>

            <div className='mt-5'>
              {/* <label htmlFor="password">Password</label> <br /> */}
              <input type="password" placeholder='password' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3'
                {...register("password", { required: true })}
              />
              {errors.password && <p className=" text-[#ff0000]">This field is required</p>}
            </div>

            <div className="mt-5">
              <p  className="py-3 ml-2 font-semibold" >Join as :</p>
            <div className="flex items-center gap-10 ">
      <label className="inline-flex items-center">
        <input type="radio" value="student" {...register('role')} className="form-radio h-4 w-4 text-blue-500" />
        <span className="ml-2 text-gray-700">Student</span>
      </label>
      <label className="inline-flex items-center">
        <input type="radio" value="teacher" {...register('role')} className="form-radio h-4 w-4 text-blue-500" />
        <span className="ml-2 text-gray-700">Teacher</span>
      </label>

    </div>
            </div>

            <div className='mt-5'>
              {/* <label htmlFor="password">Password</label> <br /> */}
              <input type="password" placeholder='confirm password' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3'
                {...register("confirmPassword", { required: true })}
              />
              {errors.password && <p className=" text-[#ff0000]">This field is required</p>}
            </div>

            <div className="mt-5">
              <p className=" text-[#ff0000]">{errorMessage}</p>


              <input type="submit" value='sign up' className='p-2 mt-2 w-full bg-primary text-white font-semibold border rounded outline-none placeholder:px-3'
                disabled={Boolean(errors.email || errors.password)}
              />
            </div>
            <p className="pt-4"> <span className="text-text">already have an account? </span> <Link className="text-primary" to='/login'>login here</Link> </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
