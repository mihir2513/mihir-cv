import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const AboutMe = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>
              Software Developer with a ability to adapt collabrative
              environments. Web developer with front-end and backend Skills.
            </p>
          </div>
          <div className="row">
            <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
            <div className="col-lg-8 d-flex flex-column align-items-stretch">
              <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Birthday:</strong> <span>13 october 2001</span>
                      </li>
                      {/* <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Website:</strong> <span>www.example.com</span>
                      </li> */}
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Phone:</strong> <span>6352143630</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>City:</strong> <span>Ahmedabads, India</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Age:</strong> <span>21</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Degree:</strong>{" "}
                        <span>
                          {" "}
                          (BSC IT) BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
                        </span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Email:</strong>{" "}
                        <span>panchalmihir107@gmail.com</span>
                      </li>
                      {/* <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li> */}
                    </ul>
                  </div>
                </div>
                {/* <div className="row mt-n4">
                  <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i
                        className="bi bi-emoji-smile"
                        style={{ color: "#20b38e" }}
                      />
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={232}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>
                        <strong>Happy Clients</strong> consequuntur voluptas
                        nostrum aliquid ipsam architecto ut.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i
                        className="bi bi-journal-richtextr"
                        style={{ color: "#8a1ac2" }}
                      />
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={521}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>
                        <strong>Projects</strong> adipisci atque cum quia
                        aspernatur totam laudantium et quia dere tan
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-clock" style={{ color: "#2cbdee" }} />
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={18}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>
                        <strong>Years of experience</strong> aut commodi quaerat
                        modi aliquam nam ducimus aut voluptate non vel
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-award" style={{ color: "#ffb459" }} />
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={16}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>
                        <strong>Awards</strong> rerum asperiores dolor alias quo
                        reprehenderit eum et nemo pad der
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* End .content*/}
              <div className="skills-content ps-lg-4">
                <div>
                  <span className="skill">
                    HTML <i className="val">75%</i>
                  </span>
                  <ProgressBar
                    completed={80}
                    ariaValuetext={80}
                    ariaValuemin={0}
                    ariaValuemax={80}
                    bgColor="#ffb727"
                    animateOnRender={true}
                  />
                </div>
                <div>
                  <span className="skill">
                    CSS <i className="val">75%</i>
                  </span>
                  <ProgressBar
                    completed={80}
                    ariaValuetext={80}
                    ariaValuemin={0}
                    ariaValuemax={80}
                    bgColor="#ffb727"
                    animateOnRender={true}
                  />
                </div>
                <div>
                  <span className="skill">
                    JavaScript <i className="val">70%</i>
                  </span>
                  <ProgressBar
                    completed={70}
                    ariaValuetext={70}
                    ariaValuemin={0}
                    ariaValuemax={70}
                    bgColor="#ffb727"
                    animateOnRender={true}
                  />
                </div>
                <div>
                  <span className="skill">
                    Node js <i className="val">70%</i>
                  </span>
                  <ProgressBar
                    completed={70}
                    ariaValuetext={70}
                    ariaValuemin={0}
                    ariaValuemax={70}
                    bgColor="#ffb727"
                    animateOnRender={true}
                  />
                </div>
                <div>
                  <span className="skill">
                    React Js <i className="val">70%</i>
                  </span>
                  <ProgressBar
                    completed={70}
                    ariaValuetext={70}
                    ariaValuemin={0}
                    ariaValuemax={70}
                    bgColor="#ffb727"
                    animateOnRender={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
