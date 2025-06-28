import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
  <Col lg="5">
    <h3 className="color_sec py-4">Mission, Vision and Core Values</h3>
  </Col>
  <Col lg="7">
    <div className="profile__section py-3">
      <h5 className="service__title">Mission</h5>
      <p className="service_desc">{services.mission}</p>
    </div>
    <div className="profile__section py-3">
      <h5 className="service__title">Vision</h5>
      <p className="service_desc">{services.vision}</p>
    </div>
    <div className="profile__section py-3">
      <h5 className="service__title">Core Values</h5>
      <ul className="service_desc">
        {services.coreValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
    <div className="profile__section py-3">
      <h5 className="service__title">Who We Are</h5>
      <p className="service_desc">{services.aboutUs}</p>
    </div>
    <div className="profile__section py-3">
      <h5 className="service__title">Why Choose Us</h5>
      <ul className="service_desc">
        {services.whyChooseUs.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
    </div>
  </Col>
</Row>

      </Container>
    </HelmetProvider>
  );
};