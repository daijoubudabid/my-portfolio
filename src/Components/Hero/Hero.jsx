/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import hero_img from "../../assets/home-banner.png";

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Designer"],
    loop: {},
    typeSpeed: 250,
  });
  return (
    <div>
      <section className="hero_section" id="home">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6">
              <div className="hero_text_area text-center text-lg-start">
                <h6>👋, My name is Dabid</h6>
                <h1>
                  I'm a <span>{text}</span>
                  <span>
                    <Cursor cursorStyle="|" />
                  </span>
                </h1>
                <p>Based in Chittagong, Rangamati.</p>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="start_btn"
                >
                  Lets Start
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero_img_area">
                <img src={hero_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
