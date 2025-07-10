import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

const dataabout = {
  title: "Strategic Security Planning",
  aboutme: "Good security starts with good advice. Our consultancy services evaluate your current setup and recommend practical improvements tailored to your risks. We help organizations design systems, assess vulnerabilities, train staff, and ensure compliance — all while maximizing efficiency and minimizing cost."
};


export const Consultancy = () => (
  <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Consultancy | Strategic Security Planning</title>
        <meta name="description" content={dataabout.aboutme} />
      </Helmet>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Consultancy</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5">
          <img
            src="/images/expertcon.jpg"
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