import { FaBootstrap, FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import skills from "../../assets/skills.png";

export const Skills = () => {
  return (
    <section className="skills_section pb-0" id="skills">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="heading">
              <h3>
                <span>My Skills</span>
              </h3>
            </div>
            <div className="skills">
              <div className="row g-3">
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="skill bg_1">
                    <div className="icon">
                      <FaHtml5 />
                    </div>
                    <h6>HTML</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="skill bg_2">
                    <div className="icon">
                      <FaCss3 />
                    </div>
                    <h6>CSS</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="skill bg_3">
                    <div className="icon">
                      <FaReact />
                    </div>
                    <h6>React JS</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="skill bg_4">
                    <div className="icon">
                      <FaBootstrap />
                    </div>
                    <h6>Bootstrap</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="skill bg_5">
                    <div className="icon">
                      <SiTailwindcss />
                    </div>
                    <h6>Tailwind</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="skill bg_6">
                    <div className="icon">
                      <FaSass />
                    </div>
                    <h6>Sass</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-image">
              <img src={skills} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
