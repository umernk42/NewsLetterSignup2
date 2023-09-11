import React from "react";
import listIcon from "../assets/images/icon-list.svg";

function ThankYouMsg({ setValid, email }) {
  return (
    <>
      <div className="thankYouContainer">
        <img src={listIcon} alt="listIcon" />
        <h1>Thanks for subscribing!</h1>  
        <p className="confirmationMsg">
          A confirmation email has been sent to <span>{email}</span>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button onClick={(e) => setValid(null)}>Dismiss Message</button>
      </div>
    </>
  );
}

export default ThankYouMsg;
