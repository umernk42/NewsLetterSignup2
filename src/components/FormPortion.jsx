import React from "react";
import listIcon from "../assets/images/icon-list.svg";
import { useState } from "react";
import { validate } from "react-email-validator";
import { NavLink } from "react-router-dom";

function FormPortion({email, setEmail, valid, setValid}) {

  const submitEmail = (e) => {
    e.preventDefault();
    setValid(validate(email));
  };

  return (
    <div className="formPortion">
      <div className="explanationText">
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src={listIcon} alt="listIcon" /> Product discovery and building
            what matters
          </li>
          <li>
            <img src={listIcon} alt="listIcon" /> Measuring to ensure updates
            are a success
          </li>
          <li>
            <img src={listIcon} alt="listIcon" /> And much more!
          </li>
        </ul>
      </div>
      <form className="form" onSubmit={submitEmail}>
        <div className="labelBox">
          <label htmlFor="email">Email address</label>
          {valid === false && <p className="errorMsg">Valid Email required</p>}
        </div>

        <input
          type="text"
          id="email"
          name="email"
          placeholder="email@company.com"
          value={email}
          onChange={(e) => {
            setValid(null);
            setEmail(e.target.value);
          }}
          className={valid === false ? "error" : ""}
        />
        <button>
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default FormPortion;
