import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <h3>MIHIR PANCHAL</h3>
          {/* <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p> */}
          <div className="social-links">
            <a
              href="https://www.instagram.com/m_i_h_i_r_2991?r=nametag"
              className="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href="https://in.linkedin.com/in/mihir-panchal-2879a4198"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </footer>
      <a
        href="#hero"
        className="back-to-top d-flex align-items-center justify-content-center active"
      >
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
};

export default Footer;
