import React from "react";
import SidePicture from "../components/SidePicture";
import FormPortion from "../components/FormPortion";
import SignupDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import SignupMobile from "../assets/images/illustration-sign-up-mobile.svg";
import { Form } from "react-router-dom";
import { useEffect,useState } from "react";

function Home({ email, setEmail, valid, setValid }) {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="home">
        <SidePicture img={windowWidth < 992 ? SignupMobile : SignupDesktop} />
        <FormPortion
          email={email}
          setEmail={setEmail}
          valid={valid}
          setValid={setValid}
        />
      </div>
    </>
  );
}

export default Home;
