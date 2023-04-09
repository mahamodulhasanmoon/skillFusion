import { useForm } from "react-hook-form";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  
  return (
    <div className='container mx-auto'>
      <div className="loggedin my-10">
        <h2 className='text-center text-2xl font-bold'>Welcome! to continue <br /> please log in here</h2>
        <div className="loggedInCart bg-white max-w-[400px] mx-auto my-10 border p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt-5'>
              <label htmlFor="email">Email or Username</label> <br />
              <input type="text" placeholder='username or email' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3'
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className='mt-5'>
              <label htmlFor="password">Password</label> <br />
              <input type="password" placeholder='password' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3'
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="mt-8">
              <input type="submit" className='p-2 mt-2 w-full bg-primary text-white font-semibold border rounded outline-none placeholder:px-3' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
