import React from "react";
import { useState } from "react";
import "./index.css"
const RandomeNumberGanarator =()=> {
  const [Randome,setRandome] = useState()
  const Generator = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    setRandome(randomNum);
  };
  return(
    <>
    <div className="app-container">
     <div className="randomenumbercontainer">
    <h1 className="heading"> Randome numbers</h1>
     <p>{Randome}</p>
     <button onClick={Generator}>Ganarate</button>
     </div>
    </div>
    </>
  )
}
export default RandomeNumberGanarator