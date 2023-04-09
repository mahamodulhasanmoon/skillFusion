import React from 'react';

const Login = () => {
    return (
        <div className='container mx-auto'>
            <div className="loggedin my-10">
                <h2 className='text-center text-2xl font-bold'>Wellcome! to containue <br /> please Logged in Here</h2>
                <div className="loggedInCart bg-white max-w-[500px] mx-auto mt-10 border py-6 px-10">
                    <form>
                        <div className='mt-5'>
                            <label htmlFor="Email Adress">Email or Username</label> <br />
                            <input type="text" placeholder='username or email ' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="Email Adress">Password</label> <br />
                            <input type="password" placeholder='password ' className='p-2 mt-2 w-full border rounded outline-none placeholder:px-3' />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;