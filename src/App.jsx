import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import ThankYouMsg from "./pages/ThankYouMsg";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(null);
  const baseURL = '/NewsLetterSignup2';

  return (
    <>
      <div className="app">
        <Routes>
          <Route
            path={`${baseURL}/`}
            element={
              !valid ? (
                <Home
                  email={email}
                  setEmail={setEmail}
                  valid={valid}
                  setValid={setValid}
                />
              ) : (
                <Navigate to={`${baseURL}/msg`} />
              )
            }
          />
          <Route
            path={`${baseURL}/msg`}
            element={
              valid ? (
                <ThankYouMsg setValid={setValid} email={email} />
              ) : (
                <Navigate to={`${baseURL}/`} />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
