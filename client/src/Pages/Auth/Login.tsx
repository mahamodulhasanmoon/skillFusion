import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { register, formState: { errors }, handleSubmit } = useForm<LoginFormValues>();


  const onSubmit = async(data: LoginFormValues) => {
    setErrorMessage("")
    try {
      const res = await axios.post("http://localhost:5000/api/v1/login", data);
      console.log(res.data);
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
              <input type="submit" className='p-2 mt-2 w-full bg-primary text-white font-semibold border rounded outline-none placeholder:px-3' />
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
