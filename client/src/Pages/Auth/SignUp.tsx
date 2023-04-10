import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../Features/api/authApi";
import { Link } from "react-router-dom";


interface LoginFormValues {
  email: string;
  password: string;
  name:String;
  username:String;
}

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { register, formState: { errors }, handleSubmit } = useForm<LoginFormValues>();
const [loginUser,{isError,isLoading,error}] = useLoginUserMutation()


  const onSubmit = async(data: LoginFormValues) => {

  
    setErrorMessage("")
    try {
     const res = loginUser(data)
     console.log(res)
      
      // localStorage.setItem("token", res.data.data.token)
    }catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const { response } = err;
        setErrorMessage(response?.data?.message || "An unknown error occurred.");
      } else {
        setErrorMessage("An unknown error occurred.");
      }
      setTimeout(()=>{
        setErrorMessage("");
      }, 1500);
    }
  };

  
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
              <input type="email" placeholder='enter your email adress' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3'
                {...register("email", { required: true })}
              />
              {errors.email && <p className=" text-[#ff0000]">This field is required</p>}
            </div>

            <div className='mt-5'>
              {/* <label htmlFor="email">Email or Username</label> <br /> */}
              <input type="text" placeholder='enter username' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3'
                {...register("username", { required: true })}
              />
              {errors.username && <p className=" text-[#ff0000]">This field is required</p>}
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
