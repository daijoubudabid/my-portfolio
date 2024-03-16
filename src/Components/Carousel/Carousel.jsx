import { useEffect } from "react";
import { tns } from "tiny-slider";
import brand_1 from "../../assets/brand-1.svg";
import brand_2 from "../../assets/brand-2.svg";
import brand_3 from "../../assets/brand-3.svg";
import brand_4 from "../../assets/brand-4.svg";
import brand_5 from "../../assets/brand-5.svg";
import brand_6 from "../../assets/brand-6.svg";
import brand_7 from "../../assets/brand-7.svg";

export const Carousel = () => {
  useEffect(() => {
    let slider = tns({
      container: ".brands",
      mode: "carousel",
      controls: false,
      swipeAngle: false,
      nav: false,
      autoplayButtonOutput: false,
      autoplayResetOnVisibility: false,
      center: true,
      items: 5,
      mouseDrag: true,
      speed: 700,
      touch: true,
      lazyload: true,
      slideBy: "1",
      autoplay: true,
      responsive: {
        900: {
          items: 5,
        },

        768: {
          items: 4,
          center: false,
        },
        0: {
          items: 3,
          center: false,
        },
      },
    });
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="carousel-section">
      <div className="container">
        <div className="brands">
          <div>
            <img src={brand_1} alt="" />
          </div>
          <div>
            <img src={brand_2} alt="" />
          </div>
          <div>
            <img src={brand_3} alt="" />
          </div>
          <div>
            <img src={brand_4} alt="" />
          </div>
          <div>
            <img src={brand_5} alt="" />
          </div>
          <div>
            <img src={brand_6} alt="" />
          </div>
          <div>
            <img src={brand_7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
