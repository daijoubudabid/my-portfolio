import { FaArrowRight } from "react-icons/fa6";
import project_1 from "../../assets/project-1.jpg";
import project_2 from "../../assets/project-2.jpg";
import project_3 from "../../assets/project-3.jpg";

export const Portfolio = () => {
  return (
    <section className="portfolio_section" id="portfolio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center heading">
            <h3>
              <span>Latest Projects</span>
            </h3>
          </div>
        </div>
        <div className="projects">
          <div className="row justify-content-around align-items-center gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4">
            <div className="col-md-6 col-lg-5">
              <div className="portfolio_img">
                <img src={project_1} alt="" />
                <a href={project_1} data-lightbox="projects">
                  <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="portfolio_text">
                <h6>
                  <span>Web Design</span>
                </h6>
                <h4>Website Design for Marketing Agency Startup</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores
                </p>
                <a href="#">View Project</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-around align-items-center gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 flex-row-reverse">
            <div className="col-md-6 col-lg-5">
              <div className="portfolio_img">
                <img src={project_2} alt="" />
                <a href={project_2} data-lightbox="projects">
                  <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="portfolio_text">
                <h6>
                  <span>Web Design</span>
                </h6>
                <h4>Website Design for Marketing Agency Startup</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores
                </p>
                <a href="#">View Project</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-around align-items-center gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4">
            <div className="col-md-6 col-lg-5">
              <div className="portfolio_img">
                <img src={project_3} alt="" />
                <a href={project_3} data-lightbox="projects">
                  <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="portfolio_text">
                <h6>
                  <span>Web Design</span>
                </h6>
                <h4>Website Design for Marketing Agency Startup</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores
                </p>
                <a href="#">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
