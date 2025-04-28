import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // ✅ correct import
import { auth } from './firebase/firebase.init'; // ✅ assuming you initialized firebase properly

const Login = () => {
    const provider = new GoogleAuthProvider();

    const handleLogin = () => {
        console.log("Login Clicked");
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user); // You can also show result.user.email etc.
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div>
            <button onClick={handleLogin}>Log in With Google</button>
        </div>
    );
};

export default Login;
