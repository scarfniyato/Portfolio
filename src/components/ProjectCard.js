import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={12} md={12} className="mb-4">
      <div className="proj-imgbx d-flex align-items-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-img-link"
        >
          <img
            src={imgUrl}
            alt={title}
            className="proj-img"
          />
        </a>

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
