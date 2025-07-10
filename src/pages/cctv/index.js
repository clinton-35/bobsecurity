import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

// Replace with your actual meta content or import if external
const meta = {
  title: "CCTV Surveillance",
  description: "Smart CCTV systems with real-time video alerts."
};

// Replace with actual data or import if needed
const dataabout = {
  title: "Smart Monitoring Solutions",
  aboutme: "In today’s unpredictable world, security is not a luxury. It is a necessity. Our state-of-the-art CCTV surveillance systems are designed to deliver complete peace of mind through continuous, intelligent monitoring. With features like motion \n\ndetection, night vision, remote access, and secure cloud storage, you can stay connected to your property from anywhere at any time."
};



export const CCTV = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>CCTV | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Page Title */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">CCTV Surveillance</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Image and Description */}
        <Row className="sec_sp">
          <Col lg="5">
            <img
              src="/images/cctv2.png"
              alt="CCTV Surveillance"
              className="img-fluid rounded shadow"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
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
};
