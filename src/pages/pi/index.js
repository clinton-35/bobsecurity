import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

const dataabout = {
  title: "Discreet and Professional Investigations",
  aboutme: "Our licensed private investigators specialize in surveillance, background checks, fraud detection, and uncovering the truth. We operate with integrity, confidentiality, and precision, supporting individuals, law firms, and businesses in gathering critical information for decision-making and legal action."
};





export const Pi = () => (
  <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Private Investigations | Discreet and Professional Investigations</title>
        <meta name="description" content={dataabout.aboutme} />
      </Helmet>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Private Investigations</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5">
          <img
            src="/images/det.png"
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