import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

const dataabout = {
  title: "Discreet Executive Protection",
  aboutme: "Our VIP protection services provide discreet and professional bodyguards for high-profile individuals. We plan safe routes, manage crowd interactions, and respond swiftly to potential threats, ensuring the safety and comfort of executives, celebrities, diplomats, and other at-risk clients."
};





export const Vip = () => (
  <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>VIP Security | Discreet Executive Protection</title>
        <meta name="description" content={dataabout.aboutme} />
      </Helmet>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">VIP Security</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5">
          <img
            src="/images/vip.avif"
            alt=""
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