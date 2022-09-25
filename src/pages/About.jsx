import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  const cards = [
    {
      title: "Real Time Updates",
      img: { src: "./imgs/someImg.jpg", alt: "Real Time Update Image" },
      text: "With our pro version, you're able to see stock consumption, sales, stock intake and more. ",
    },
    {
      title: "Custom Alerts",
      img: { src: "./imgs/someImg.jpg", alt: "Real Time Update Image" },
      text: "Never run out of stock again with custom alerts. Simply set a min requirement when registering stock into the system, and we'll notify you as soon as the level meets that threshold",
    },
    {
      title: "Invoice Generation",
      img: { src: "./imgs/someImg.jpg", alt: "Real Time Update Image" },
      text: "Generate invoices on the fly with our all in one invoice generator.",
    },
    {
      title: "Track Stock Usage",
      img: { src: "./imgs/someImg.jpg", alt: "Real Time Update Image" },
      text: "See where your stock is going and...",
    },
    {
      title: "Real Time Updates",
      img: { src: "./imgs/someImg.jpg", alt: "Real Time Update Image" },
      text: "Some other random card",
    },
    {
      title: "Real Time Updates",
      img: { src: "./imgs/someImg.jpg", alt: "Real Time Update Image" },
      text: "and one last random card.",
    },
  ];

  return (
    <>
      <Container>
        <h1 className="text-center">About Us</h1>
        <p>
          Here at Cims we aim to meet all off your Inventory Management Needs.
          Whether this is tracking components within a manufacturing business or
          tracking sales, we have you covered.
        </p>

        <Row>
          {cards.map((card) => {
            return (
              <Col xs={12} md={6} className="mt-3">
                <Card>
                  <Card.Title className="text-center">{card.title}</Card.Title>
                  <Card.Img
                    variant="top"
                    src={card.img.src}
                    alt={card.img.alt}
                  />

                  <Card.Body>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default About;
