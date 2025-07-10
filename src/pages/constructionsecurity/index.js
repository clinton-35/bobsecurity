import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

const dataabout = {
  title: "Construction Site Protection",
  aboutme: "Construction sites are high-risk environments, often targeted for equipment, tools, and materials. Our construction security services provide on-site guards, \n\n\n\nperimeter monitoring, and rapid response to unauthorized access. Whether it’s a      large-scale development or a temporary project, we ensure your assets, workers, and progress are safeguarded around the clock."
};

export const ConstructionSecurity = () => (
  <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Construction Security | SmartShield</title>
        <meta name="description" content={dataabout.aboutme} />
      </Helmet>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Construction Security</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5">
          <img
            src="/images/construction.jpg"
            alt="Construction Security"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <div>
            <h3 className="color_sec py-4">{dataabout.title}</h3>
            <p>{dataabout.aboutme}</p>
          </div>
        </Col>
      </Row>
    </Container>
  </HelmetProvider>
);