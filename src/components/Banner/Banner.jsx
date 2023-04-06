import React from 'react';
import { Container } from 'reactstrap';
import "./Banner.css"

const Banner = ({title}) => {
  return (
    <section className="about_banner">
        <Container className="text-center">
            <h1 className='banner-text'>{title}</h1>
        </Container>
    </section>
  );
}

export default Banner;
