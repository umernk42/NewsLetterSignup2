import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import ThankYouMsg from "./pages/ThankYouMsg";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(null);

  return (
    <>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              !valid ? (
                <Home
                  email={email}
                  setEmail={setEmail}
                  valid={valid}
                  setValid={setValid}
                />
              ) : (
                <Navigate to="/msg" />
              )
            }
          />
          <Route
            path="/msg"
            element={
              valid ? (
                <ThankYouMsg setValid={setValid} email={email} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
