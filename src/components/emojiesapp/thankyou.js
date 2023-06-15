import React from "react";
const RenderThankyouMessage = (props) => {
    const { feedback} = props;
    return (
      <>
       <div className="thankyou-message">
        <h2 className="heading">Thank you </h2>
        <p>ThankYou for your feedback Dear RatnapriyaReddy: {feedback}</p>
      </div>
      </>
    );
  };
  export default RenderThankyouMessage;