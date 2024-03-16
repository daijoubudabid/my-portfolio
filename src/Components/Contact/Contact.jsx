import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import contact_bg from "../../assets/contact-bg.png";

export const Contact = () => {
  return (
    <section className="contact_section" id="contact">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="contact_form">
              <h6>Get In Touch</h6>
              <p>Our friendly team would love to hear from you.</p>
              <form action="https://getform.io/f/ec401448-8499-483c-8e0a-4f42f1cc3517" method="post">
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email *"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject *"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Your Message
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="4"
                        placeholder="Your Message *"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button type="button" value="Send">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ms-auto col-xl-4">
            <div className="pb-5">
              <img className="w-100" src={contact_bg} alt="" />
            </div>
            <ul className="contact_infos">
              <li>
                <div className="icon bg_1">
                  <FaPhoneAlt />
                </div>
                <div className="col">
                  <h5>Phone</h5>
                  <p>+01 123 654 8096</p>
                </div>
              </li>
              <li>
                <div className="icon bg_2">
                  <FaEnvelope />
                </div>
                <div className="col">
                  <h5>Mail</h5>
                  <p>info@domainname.com</p>
                </div>
              </li>
              <li>
                <div className="icon bg_3">
                  <FaLocationDot />
                </div>
                <div className="col">
                  <h5>Visit My Studio</h5>
                  <p>
                    Warnwe Park Streetperrine,
                    <br />
                    FL 33157 New York City
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="left_effects"></div>
      <div className="right_effects"></div>
    </section>
  );
};
