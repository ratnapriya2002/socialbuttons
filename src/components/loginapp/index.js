// import React from "react";
// import { useState } from "react";
// import "./index.css";

// const LoginApp =()=>{
//    const [Login,setLogin] = useState("")
//    const [Logout,setLogout] = useState(false)
//    const WelcomeLogin = () =>{
//      setLogin((prevstate)=>!prevstate)
//    }
//   return (
//     <>
//     <div className="app-container">
//       {Login?<h1 className="heading">Please Login</h1>:<h1 className="heading">Welcome to our app</h1>}
      
//       <button 
//       className="button" 
//       onClick={WelcomeLogin}>Login
//       {Logout? "Login" :"Logout"}
//       </button>
       
//     </div>
//     </> 
//   )

// }
// export default LoginApp
import React, { useState } from "react";
import "./index.css";

const LoginApp = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <h1 className="heading">Welcome to our app</h1>
      ) : (
        <h1 className="heading">Please Login</h1>
      )}

      <button className="button" onClick={handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default LoginApp;
