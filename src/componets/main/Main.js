import React from "react";
import AboutMe from "../about/AboutMe";
import ContactMe from "../contactMe/ContactMe";
import Resume from "../resume/Resume";

const Main = () => {
  return (
    <>
      <main id="main">
        <AboutMe />
        <Resume />
        <ContactMe />
      </main>
    </>
  );
};

export default Main;
