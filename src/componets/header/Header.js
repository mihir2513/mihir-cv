import { useState } from "react";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const handleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };
  const handleListNavbar = () => {
    // debugger;
    if (toggleNavbar === true) {
      setToggleNavbar(!toggleNavbar);
    } else {
      setToggleNavbar(false);
    }
  };
  return (
    <>
      <header
        id="header"
        className={
          colorChange
            ? "fixed-top d-flex justify-content-center align-items-center header-transparent header-scrolled"
            : "fixed-top d-flex justify-content-center align-items-center header-transparent"
        }
        // className="fixed-top d-flex justify-content-center align-items-center header-transparent"
      >
        <nav
          id="navbar"
          className={toggleNavbar ? "navbar navbar-mobile" : "navbar"}
        >
          <ul>
            <li>
              <a
                className="nav-link scrollto active"
                href="#hero"
                onClick={handleListNavbar}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#about"
                onClick={handleListNavbar}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#resume"
                onClick={handleListNavbar}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#contact"
                onClick={handleListNavbar}
              >
                Contact
              </a>
            </li>
          </ul>
          <i
            className={
              toggleNavbar
                ? "bi bi-x mobile-nav-toggle"
                : "bi bi-list mobile-nav-toggle"
            }
            onClick={handleNavbar}
          />
        </nav>
        {/* .navbar */}
      </header>
    </>
  );
};

export default Header;
