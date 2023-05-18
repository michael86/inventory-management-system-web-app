import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Row, Col, Card, Container } from "react-bootstrap";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/useReducedmotion";

import "../../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Historical Data",
    img: { src: "https://placehold.co/600x400/000000/FFF", alt: "Historical Data" },
    text: "View a 6-month period of historical data from any given period straight from the dashboard, or view all of the data in an easy to ready table from a given items view page",
  },
  {
    title: "Stock Level Warnings",
    img: { src: "https://placehold.co/600x400/000000/FFF", alt: "Real Time Update Image" },
    text: "Never run out of stock again with custom alerts. Simply set a min requirement when registering stock into the system, and we'll notify you as soon as the level falls below that limit",
  },
  {
    title: "Invoice Generation",
    img: { src: "https://placehold.co/600x400/000000/FFF", alt: "Real Time Update Image" },
    text: "Generate invoices in seconds with our invoice generator, then download them in a nicely formatted pdf ready to send to your clients.",
  },
  {
    title: "Track Stock Usage",
    img: { src: "https://placehold.co/600x400/000000/FFF", alt: "Real Time Update Image" },
    text: "View stock usage in easy to read charts and work out where you could save on expenses.",
  },
  {
    title: "Track employees",
    img: { src: "https://placehold.co/600x400/000000/FFF", alt: "Real Time Update Image" },
    text: "Simply add an employee to your account, assign them a role and see what employee removed or added stock.",
  },
  {
    title: "Generate Work Sheets",
    img: { src: "https://placehold.co/600x400/000000/FFF", alt: "Real Time Update Image" },
    text: "Manufacture for a repeat client? Create a worksheet, detailing how many components are required, download and print the pdf and your employees can easily view what parts they require",
  },
];

const About = () => {
  const reducedMotion = usePrefersReducedMotion();

  const scopeRef = useRef();

  useLayoutEffect(() => {
    if (!scopeRef || reducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = [...scopeRef.current.children].map((col) => [...col.children]).flat();

      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top center",
            scrub: true,
            // markers: true,
          },

          scale: 0,
        });
      });
    }, [scopeRef]);
  }, []);

  return (
    <section className="about pt-3">
      <Container>
        <h1 className="text-center">About Us</h1>
        <div className="text-center">
          <p>
            Here at Cims we understand what it takes to run a succesful business, time, dedication
            and hard work. We aim to help help all off these needs by providing you an all in one
            Inventory Management system. From our streamline registration, to our invoice generator,
            stock management and historical data.
          </p>

          <p>
            You'll be able to dedicate more time to meeting clients needs or location stock in
            seconds. Don't just take our word for it though! Read about some of our features below.
          </p>
        </div>

        <Row ref={scopeRef} className="justify-content-center mt-3">
          {cards.map((card, i) => {
            return (
              <Col xs={12} md={4} className="mb-3" key={i}>
                <Card className="h-100 ">
                  <Card.Title className="text-center">{card.title}</Card.Title>
                  <Card.Img variant="top" src={card.img.src} alt={card.img.alt} />

                  <Card.Body>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default About;
