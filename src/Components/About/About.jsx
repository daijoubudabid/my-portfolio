/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";
import about_me_banner from "../../assets/aboutme-banner.png";

export const About = () => {
  return (
    <section className="about_section" id="about">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 text-center">
            <img src={about_me_banner} alt="" />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="about_text">
              <h3>
                I'm a Freelancer Front-end Developer with over 3 years of
                experience.
              </h3>
              <p>
                I'm a Freelancer Front-end Developer with over 3 years of
                experience. I'm from San Francisco. I code and create web
                elements for amazing people around the world. I like work with
                new people. New people new Experiences.
              </p>
              <div className="row pt-2">
                <div className="col-4">
                  <h5>285+</h5>
                  <span>Projects Completed</span>
                </div>
                <div className="col-4">
                  <h5>190+</h5>
                  <span>Happy Clients</span>
                </div>
                <div className="pt-4">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="contact_btn me-4"
                  >
                    Contact Me
                  </Link>
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="portfolio_btn"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
