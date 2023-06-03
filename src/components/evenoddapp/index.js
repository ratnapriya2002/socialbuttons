
import React, { useState } from "react";
import "./index.css";

const EvenOddApp = () => {
  const [count,setCount] = useState(0)
  const [Message,setMessage] = useState("")
  const Generator = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    setCount(randomNum);
    if (randomNum%2 ===0){
      setMessage("The number is even")
    
    }
    else{
      setMessage("The number is odd")
    }
      
  };
 
  return (
    <div className="app-container">
     <h1 className="heading">CounterApplication {count}</h1>
     <p>{Message}</p>
     <button onClick={Generator} className="button">Increament</button>
    </div>
  );
};

export default EvenOddApp;
