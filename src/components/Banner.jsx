import React from "react";
import { Container, Carousel } from "react-bootstrap";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";

function Banner() {
  return (
    <Container>
      <Carousel interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Slide 3" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Banner;
