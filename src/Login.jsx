import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'; // ✅ correct import
import { auth } from './firebase/firebase.init'; // ✅ assuming you initialized firebase properly

const Login = () => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)

    const handleLogin = () => {
        console.log("Login Clicked");
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(user); // You can also show result.user.email etc.
                setUser(result.user)
            })
            .catch(error => {
                console.error(error);
                
            });
    }

    const handleSignOut = () => {
        signOut(auth) .then(() => {
            console.log("SignOut");
            setUser(null)
             
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div>
            {
                user ? <button onClick={handleSignOut}>Log Out</button> :  <button onClick={handleLogin}>Log in With Google</button>
            }
            
            
        </div>
    );
};

export default Login;
