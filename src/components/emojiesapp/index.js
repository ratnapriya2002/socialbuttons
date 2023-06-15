// import React from "react";
// import { useState } from "react";
// import resources from "./todos";

// import  RenderThankyouMessage from "./thankyou"
// import "./index.css";

// const EmojiesApp = () => {
//   const [satisfied, setSatisfied] = useState("");
//   const [feedback, setFeedback] = useState("");
//   // const [feedback]=props
//   // const SatisfiedContainer = ()=>{
//   //   setSatisfied()
//   // }
//   return (
//     <div className="bg-container">
//       <div className="small-container">
//         <h1 className="top-heading">Are you Satisfied with our support</h1>
//         <div className="emojis-container">
//         {resources.emojis.map((emoji) => (
//         <div key={emoji.id} className="emoji-card">
//           <img
//             src={emoji.imageUrl}
//             alt={emoji.name}
//             onClick={() => setFeedback(emoji.name)}
//           />
//           <p className="heading">{emoji.name}</p>
//         </div>
//       ))}
//         </div>
//       </div>
//      </div>
//   );
// };

// export default EmojiesApp;

import React, { useState } from "react";
import resources from "./todos";
import RenderThankyouMessage from "./thankyou";
import "./index.css";

const EmojiesApp = () => {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="bg-container">
      <div className="small-container">
        <h1 className="top-heading">Are you Satisfied with our support</h1>
        <div className="emojis-container">
          {resources.emojis.map((emoji) => (
            <div key={emoji.id} className="emoji-card">
              <img
                src={emoji.imageUrl}
                alt={emoji.name}
                onClick={() => setFeedback(emoji.name)}
              />
              <p className="heading">{emoji.name}</p>
            </div>
          ))}
        </div>
      </div>
      {feedback && <RenderThankyouMessage feedback={feedback} />}
    </div>
  );
};

export default EmojiesApp;
