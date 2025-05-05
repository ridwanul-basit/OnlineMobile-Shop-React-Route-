import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userI from "../src/assets/user.png"
import { AuthContext } from './authprovider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = use(AuthContext)
    const handleLogOut = () =>{
    logOut()
    .then(() =>{
        alert("Loged Out")

    })
    .catch((error) =>{
        // console.error(error)
    });

    }
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div> {user && user.email}</div>
            <div className="nav text-accent flex gap-5">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img src={userI} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</button> : <Link to={"/auth/login"} className='btn btn-primary px-10'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;