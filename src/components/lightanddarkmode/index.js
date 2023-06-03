import React, { useState } from "react";
import "./index.css";

const LightAndDark = () => {
  const [isDark, setMode] = useState(false);

const  changeMode = ()=>{
    setMode((prevState)=>!prevState)
}
  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <h1 className={isDark ? " dark-text" : " light-text"}>
        Click to change mode
      </h1>
      <button className="button1" onClick={changeMode}>
        Change Mode
      </button>
    </div>
  );
};

export default LightAndDark;
