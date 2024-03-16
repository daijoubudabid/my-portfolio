import { Link } from "react-scroll";

export const Interest = () => {
  return (
    <div className="interest_section py-5">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-8 col-md-7 text-center text-md-start">
            <h4 className="h1 m-0 text-white">Interested working with me?</h4>
          </div>
          <div className="col-lg-4 col-md-5 text-center text-md-end">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="contact_btn"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
