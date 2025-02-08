import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const [userInfo, setUserInfo] = useState(null); 

    const handleSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        console.log("User Info:", decoded);
        

        const user = {
            name: decoded.name,
            email: decoded.email,
            picture: decoded.picture,
        };
    
        localStorage.setItem("userInfo", JSON.stringify(user));
    
        setUserInfo(user);

        alert(`Welcome, ${decoded.name}!`);
    };

    const handleFailure = () => {
        alert("Google Sign-In Failed!");
    };
    // console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <div className="login-container">
                <h2>Login with Google</h2>
                <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
