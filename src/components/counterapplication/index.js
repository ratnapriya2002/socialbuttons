import React from "react";
import { useState } from "react";
import "./index.css"


const  CounterApplication = () =>{
    const [count,setCount] = useState(0) 
    const onIncrement = () =>{
        setCount ((prevCount)=>prevCount+1)
    
    }
    const onDigrement = () =>{
        setCount ((prevCount)=>prevCount-1)
        
    }
    return(
        <>
         <h1 className="heading">{count}</h1>
         <div className="ButtonsContainer">
            <button className="button1" onClick={onIncrement}>Increase</button>
            <button className="button2" onClick = {onDigrement}>Dicrease</button>
         </div>
        </>
    )

}
export default CounterApplication