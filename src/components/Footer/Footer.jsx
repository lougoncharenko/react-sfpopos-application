import React from 'react';
import { Container, Row, Col, ListGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='footer-row'>
          <Col className="footer-section" lg="4">
          <section className="logo">
              <img id="logo" 
              src="https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg" 
              alt="elite home official logo" />
              <section>
                <h2 className="footer-heading">Elite Homes</h2>
              </section>
            </section>
            <p className="footer_text mt-4">
              Find your perfect forever home </p>
              <p className="footer_text mt-4">in the San Francisco area with </p>
              <p className="footer_text mt-4">Elite Homes!</p>
          </Col>
          <Col className="footer-section" lg="3">
            <section className="footer_quick-links">
              <h2 className="quick_links-title">Top Homes</h2>
              <ListGroup >
              <section className='link_list_item'>
                  <Link to='#'>1 Bedroom Homes</Link>
                </section>
                <section className='link_list_item'>
                  <Link to='#'>2 Bedroom Homes</Link>
                </section>
                <section className='link_list_item'>
                  <Link to='#'>3 Bedroom Home</Link>
                </section>
              </ListGroup>
            </section>
          </Col>
          <Col className="footer-section" lg="2">
          <section className="footer_quick-links">
              <h2 className="quick_links-title">Useful Links</h2>
              <ListGroup >
                <section className='link_list_item'>
                  <Link to='/shop'>About</Link>
                </section>
                <section className='link_list_item'>
                  <Link to='/cart'>NewsLetter</Link>
                </section>
                <section className='link_list_item'>
                  <Link to='/login'>Login</Link>
                </section>
                <section className='link_list_item'>
                  <Link to='/privacy'>Privacy</Link>
                </section>
              </ListGroup>
            </section>
          </Col>
          <Col className="footer-section" lg="3">
          <section className="footer_quick-links">
              <h2 className="quick_links-title">Contact Us</h2>
              <ListGroup >
                <section className='link_list_item'>
                  <span className='icons'><i class="ri-map-pin-line"></i></span>
                  <p> 345 14th street, San Francisco CA 94016</p>
                </section>
                <section className='link_list_item'>
                  <span className='icons'><i class="ri-phone-line"></i></span>
                  <p>+4155761848</p>
                </section>
                <section className='link_list_item'>
                  <span className='icons'><i class="ri-mail-line"></i></span>
                  <p>elitehome-help@gmail.com</p> 
                </section>
              </ListGroup>
            </section>
          </Col>
        
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
