
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../Features/api/authApi";
import { Link,  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../Features/auth/authSlice";


interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginUserError {
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

const Login = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState<any>("");
  const { register, formState: { errors }, handleSubmit } = useForm<LoginFormValues>();
const [loginUser,{isError,isLoading,error,data,isSuccess}] = useLoginUserMutation<LoginUserError>()

const msg = error?.data?.message

const dispatch = useDispatch()

  const onSubmit = async(data: LoginFormValues) => {
 setErrorMessage("")
 await loginUser(data)
    
  };

  useEffect(()=>{

    if(isSuccess){
      dispatch(setUser(data))
      navigate('/')

    }else{
      if (isError) {
        
        
        setErrorMessage(msg || 'unknown error occurred');
        
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
              <input type="text" placeholder='username or email' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3'
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
            <p className=" text-[#ff0000]">{errorMessage}</p>
           

              <input type="submit" className='p-2 mt-2 w-full bg-primary text-white font-semibold border rounded outline-none placeholder:px-3' 
              disabled={Boolean(errors.email || errors.password)}
              />
            </div>
            <p className="pt-4"> <span className="text-text">New user ? </span> <Link className="text-primary" to='/signup'>signup here</Link> </p>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
