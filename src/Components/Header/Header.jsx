import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleNavItemClick = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler && window.innerWidth < 992) {
      navbarToggler.click();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar_section">
      <Navbar
        fixed="top"
        expand="lg"
        className={scrolled ? "scrolled_navbar" : ""}
      >
        <Container>
          <Navbar.Brand href="/">
            <img width={150} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleNavItemClick}
                className="nav-link"
              >
                Home
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                onClick={handleNavItemClick}
                className="nav-link"
              >
                Services
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleNavItemClick}
                className="nav-link"
              >
                Skills
              </Link>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleNavItemClick}
                className="nav-link"
              >
                Portfolio
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleNavItemClick}
                className={scrolled ? "nav-link scrolled" : "nav-link"}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="d-none d-lg-block contact_btn"
          >
            Contact Now
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};
