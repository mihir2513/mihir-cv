import React from "react";

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <span>My Resume</span>
            <h2>My Resume</h2>
            {/* <p>
              Sit sint consectetur velit quisquam cupiditate impedit suscipit
              alias
            </p> */}
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>MIHIR PANCHAL</h4>
                <p>
                  <em>
                    As a recent graduate, I am seeking a role which allows me to
                    continue learning and perfecting my skills as I provide
                    high-quality work, and encourages me to flourish.
                  </em>
                </p>
                <p></p>
                <ul>
                  <li>Ahmedabads, India</li>
                  <li>6352143630</li>
                  <li>panchalmihir107@gmail.com</li>
                </ul>
                <p />
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>12TH STANDARD (HSC BOARD)</h4>
                <h5>MARCH-2019</h5>
                <p>
                  <em>Shree New vidhya vihar for girl's</em>
                </p>
                <p>RESULT :- 87%</p>
              </div>
              <div className="resume-item">
                <h4>(BSC IT) BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</h4>
                <h5>MARCH-2022</h5>
                <p>
                  <em>K S School Of Business Management</em>
                </p>
                <p>GPA:-3.31</p>
              </div>
              <div className="resume-item">
                <h4>(MSC IT) MASTER OF SCIENCE IN INFORMATION TECHNOLOGY</h4>
                <h5>Pursuing 7th semester</h5>
                <p>
                  <em>K S School Of Business Management</em>
                </p>
                {/* <p>GPA:-3.31</p> */}
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Trainee</h4>
                <h5>2022 - Present</h5>
                <p>
                  <em>CoodeIT Soultion Pvt Ltd., Ahmedabad, GUJ</em>
                </p>
                <p></p>
                <ul>
                  <li>
                    Participated in on-the-job training, working closely with
                    supervisors and coworkers and asking appropriate questions
                    Shadowed senior team members to learn all related jobs and
                    tasks.
                  </li>
                  <li>Reviewed code, debugged problems and conected issues.</li>
                  <li>
                    Discussed project progress with customers, collected
                    feedback on different stages and directly addressed
                    concerns.
                  </li>
                </ul>
                <p />
              </div>
              <div className="resume-item">
                <h4>PROJECTS</h4>
                <h5>BSC(IT) 3rd year Final project</h5>
                <p>
                  <em>Role :- Developing & Design</em>
                </p>
                <p>
                  <em>Frontend:- HTML/CSS/PYTHON(DJANGO Framework)</em>
                </p>
                <p>
                  <em>Backend:-MYSQL</em>
                </p>
                <p>
                  <em>
                    Description:- This website is a B2B business where you can
                    find all kinds of baby products for purchase
                  </em>
                </p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
