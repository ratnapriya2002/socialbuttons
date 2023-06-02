import React from "react";
import { useState } from "react";
import "./index.css"


const  CounterApplication = () =>{
    const [isSuccribed,setSuccribed] = useState("hi") 
    const onClickButton = () =>{
        setSuccribed(!isSuccribed)
    
    }
  
    return(
        <>
         <h1 className="heading"> Happy Learning</h1>
         <div className="ButtonsContainer">
           
          <button className="button1" onClick={onClickButton}>
            {isSuccribed ?"succribe" :"succribed"}
            </button> 
         </div>
        </>
    )

}
export default CounterApplication