import React from "react";

const ContactMe = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <span>Contact Me</span>
            <h2>Contact Me</h2>
            <p>
              Sit sint consectetur velit quisquam cupiditate impedit suscipit
              alias
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bx bx-share-alt" />
                    <h3>Social Profiles</h3>
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
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope" />
                    <h3>Email Me</h3>
                    <p>panchalmihir107@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call" />
                    <h3>Call Me</h3>
                    <p>+91 6352143630</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
