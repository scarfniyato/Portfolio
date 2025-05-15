import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contactImg.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const email = "syralooc02@gmail.com";
  const subject = encodeURIComponent("Contact from Portfolio Website");
  const body = encodeURIComponent("Hello Syra,\n\nI would like to get in touch with you regarding...");

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={`contact-img ${isVisible ? "animate__animated animate__zoomIn" : ""}`}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} style={{ textAlign: "center" }}>
                  <h2>Get In Touch</h2>
                  <p></p>
                  <a href={mailtoLink}>
                    <button className="vvd" style={{}}>
                      <span>Send Email</span>
                    </button>
                  </a>
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/syra-looc"><img src={navIcon1} target="_blank" alt="LinkedIn" /></a>
                    {/*<a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>*/}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
