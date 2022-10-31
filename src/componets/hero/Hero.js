import React from "react";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <h1>Mihir Panchal</h1>
          <h2>I'm a Professional MERN stack developer</h2>
          <a href="#about" className="btn-scroll scrollto" title="Scroll Down">
            <i className="bi bi-chevron-down" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
