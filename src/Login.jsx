import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './authprovider/AuthProvider';

const Login = () => {
    const [error,setError]= useState("");
    const {signIn,setUser}= use(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password =form.password.value;
        signIn(email,password)
        .then((result) =>{
           const  user = result.user
            setUser(user)
            navigate(`${location.state? location.state : '/' }`)
    
        })
        .catch((error) =>{
            const errorCode = error.code;
            // const errorMessage= error.message
            setError(errorCode)
        })
    } 
    return (
        <div className='flex justify-center min-h-screen items-center'>
           <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='text-2xl font-bold text-center '>Login In Your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          { error && <p className='text-red-400 text-xs py-2'>{error}</p>}
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='pt-5'>Don't have an account ? <Link to={"/auth/register"} className='text-secondary'>Register</Link> </p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;