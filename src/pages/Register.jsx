import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../authprovider/AuthProvider';

const Register = () => {
    const {createUser,setUser,updateUser} = use(AuthContext)
    const navigate = useNavigate()
    const handleRegister= (e) =>{
        e.preventDefault();
        const form = e.target 
        const name = form.name.value 
        const photo = form.photo.value 
        const email = form.email.value 
        const password = form.password.value
        // console.log(name,photo,email,password) 
        createUser(email,password)
        .then((result) => {
            
            const user = result.user;
            updateUser({displayName:name, photoURL:photo}).then(()=>{
                setUser({...user, displayName : name, photoURL:photo});
                navigate("/");
            })      
   
          })
          .catch((error) => {
            setUser(user);
            
          });
        

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
           <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='text-2xl font-bold text-center '>Register Account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
        <label className="label">Name</label>
        <input name="name" type="text" className="input" placeholder="Enter Your Name" required />
        <label className="label">Photo Url</label>
        <input name="photo" type="text" className="input" placeholder="Enter Your Photo URL" required />
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required />
          
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='pt-5'>Already have an account ? <Link to={"/auth/login"} className='text-secondary'>Login</Link> </p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;