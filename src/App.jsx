import { BrowserRouter } from "react-router-dom";
import { About } from "./Components/About/About";
import { Carousel } from "./Components/Carousel/Carousel";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Service } from "./Components/Service/Service";
import { Skills } from "./Components/Skills/Skills";
import { Interest } from "./Components/Interest/Interest";
import { Testimonial } from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Carousel />
        <About />
        <Service />
        <Skills />
        <Interest />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
