import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/UPCOwebsite.jpg";
import projImg2 from "../assets/img/keeplyImg.png";
import projImg3 from "../assets/img/SOSeco..jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "UPCO Website – Environmental Monitoring System",
      description: "As Lead Developer, I spearheaded the full-stack development of a web platform for the University Pollution Control Office. The site allows users to track and visualize environmental data. Using React.js and Chart.js for the front-end and Node.js, Express, and MongoDB for the backend, the system enables efficient pollution record management and data-driven reporting.",
      imgUrl: projImg1,
      link: "https://drive.google.com/file/d/1AKt8UJngP6sURqIdgdq0SKjNuwLfIXu4/view?usp=sharing"
    },
    {
      title: "KEEPLY: Keep It Scheduled",
      description: "A productivity mobile app created for students to manage academic responsibilities more effectively. I led development using React Native, Firebase, and TypeScript. Key features include a schedule planner, course-based folders, and in-app note-taking. KEEPLY helps students stay organized and reduce academic stress.",
      imgUrl: projImg2,
      link: "https://www.figma.com/proto/SjPFCHHD5OtuvWQT9Z0YeZ/keeply.?node-id=76-433&p=f&t=Ws1lCMBURkBu20In-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=76%3A433&show-proto-sidebar=1"
    },
    {
      title: "SOSeco – Community Reporting System",
      description: "2nd Runner-Up – P2OJECT YSES: Future Ideator Quest 2025. A mobile-based community reporting prototype designed to empower Indigenous communities in documenting socio-ecological violations. Developed for the Future Ideator Quest 2025, the app features geo-tagged incident reporting, offline functionality, and a real-time dashboard for monitoring and visualization. The project supports SDG goals—Life on Land and Climate Action—and reflects a commitment to socially impactful tech.",
      imgUrl: projImg3,
      link: "https://www.figma.com/proto/zx0pWFcwzw2fT1SAVnFn7o/String-groupName---game_SOSCco.?node-id=1-2&starting-point-node-id=1%3A2&t=WAQyBP1U3bMXAI9C-1"
    },
  ];

  return (

    <section className="project" id="projects">
      <section className="achievements" id="achievements">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="achievements-bx wow zoomIn">
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Projects</h2>
                      <p>Welcome to my project showcase! Here you'll find a selection of my work demonstrating hands-on experience with web and mobile app development. From community-driven solutions to productivity tools, each project reflects my commitment to solving real-world problems using modern technologies.</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            <Row>
                              {
                                projects.map((project, index) => {
                                  return (
                                    <ProjectCard
                                      key={index}
                                      {...project}
                                    />
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="section">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>}
                </TrackVisibility>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
