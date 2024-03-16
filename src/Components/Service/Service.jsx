import { BsColumns, BsDistributeVertical, BsGlobe, BsLaptop, BsTriangle } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";




export const Service = () => {
  return (
    <section className="service_section" id="services">
      <div className="container">
        <div className="row justify-content-center heading">
          <div className="col-lg-6 text-center heading">
            <h3>
              <span>My Services</span>
            </h3>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="service_contents bg_1">
              <div className="icon">
                <CiMobile2 />
              </div>
              <div className="feature">
                <h5>Web Design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service_contents bg_2">
              <div className="icon">
                <BsLaptop />
              </div>
              <div className="feature">
                <h5>Development</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service_contents bg_3">
              <div className="icon">
                <BsTriangle />
              </div>
              <div className="feature">
                <h5>Seo Marketing</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service_contents bg_4">
              <div className="icon">
                <BsColumns />
              </div>
              <div className="feature">
                <h5>Web Design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service_contents bg_5">
              <div className="icon">
                <BsDistributeVertical />
              </div>
              <div className="feature">
                <h5>Web Design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service_contents bg_6">
              <div className="icon">
                <BsGlobe />
              </div>
              <div className="feature">
                <h5>Seo Marketing</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
