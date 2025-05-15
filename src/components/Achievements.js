import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import hackathonPic from "../assets/img/hackathonPic.jpg";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Achievements = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="achievements-bx wow zoomIn">
              <h2>Achievements</h2>
              <p></p>
              <div className="item achievement-item">
                <div className="achievement-image">
                  <img src={hackathonPic} alt="Hackathon 2025" />
                </div>
                <div className="achievement-text">
                  <h5>2nd Runner-Up – Hackathon 2025</h5>
                  <p>Placed as 2nd Runner-Up in the P2OJECT YSES: Future Ideator Quest 2025 for innovative app development. </p>
                  <p>Our team conceptualized and designed a mobile-based community reporting system prototype aimed at empowering Indigenous communities in documenting socio-ecological violations. The project focused on SDG goals, specifically Life on Land and Climate Action. The prototype featured geo-tagged incident reporting, offline functionality, and a centralized dashboard for real-time monitoring and data visualization.</p>
                  <p>April 12, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
