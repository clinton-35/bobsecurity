import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

const dataabout = {
  title: "Comprehensive Residential and Commercial Protection",
  aboutme: "Your home and workplace deserve the highest level of security. We offer 24/7 manned guarding, access control, surveillance integration, and patrol services tailored to both residential and office environments. Whether you're safeguarding a family home, apartment complex, or corporate office, our trained personnel and advanced technology work together to deter intrusions, prevent theft, and ensure a safe, secure environment for everyone on the premises."
};



export const HomeSecurity = () => (
  <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home and Office Security | Residential and Commercial Protection</title>
        <meta name="description" content={dataabout.aboutme} />
      </Helmet>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Home and Office Security</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5">
          <img
            src="/images/doorlock.jpg"
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