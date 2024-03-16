import { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { tns } from "tiny-slider";
import avatar_1 from "../../assets/avatar-1.jpg";
import avatar_2 from "../../assets/avatar-2.jpg";
import avatar_3 from "../../assets/avatar-3.jpg";
import avatar_4 from "../../assets/avatar-4.jpg";

const review = [
  {
    name: "Jenniffer Lutheran",
    img: avatar_1,
    text: "",
    prof: "Marketing Manager",
  },
  {
    name: "Jenniffer Lutheran",
    img: avatar_2,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    prof: "Marketing Manager",
  },
  {
    name: "Jenniffer Lutheran",
    img: avatar_3,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    prof: "Marketing Manager",
  },
  {
    name: "Jenniffer Lutheran",
    img: avatar_4,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    prof: "Marketing Manager",
  },
];

export const Testimonial = () => {
  useEffect(() => {
    let slider = tns({
      container: ".testimonial",
      mode: "carousel",
      controls: false,
      nav: true,
      navAsThumbnails: false,
      navContainer: ".controls",
      autoplayButtonOutput: false,
      autoplayResetOnVisibility: false,
      items: 2,
      mouseDrag: true,
      swipeAngle: false,
      gutter: 30,
      speed: 700,
      touch: true,
      lazyload: true,
      slideBy: "1",
      autoplay: true,
      responsive: {
        768: {
          items: 2,
        },

        0: {
          items: 1,
          navAsThumbnails: true,
        },
      },
    });
    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <section className="testimonial_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center heading">
            <h3>
              <span>Testimonial</span>
            </h3>
          </div>
        </div>
        <div className="testimonial">
          {review.map((item, index) => (
            <div key={index}>
              <div className="review_container">
                <div className="d-flex gap-4">
                  <div className="review_img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="review">
                    <div className="icon">
                      <FaQuoteLeft />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde iure, voluptatibus ipsam facilis maiores repudiandae
                      maxime non natus eos delectus? In accusantium nisi
                      inventore porro!
                    </p>
                    <h6>{item.name}</h6>
                    <span>{item.prof}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="controls">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
