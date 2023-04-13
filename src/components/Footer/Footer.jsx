import React from 'react';
import { Container, Row, Col, ListGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='footer-row'>
          <Col lg="4">
          <div className="logo">
              <img id="logo" 
              src="https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg" 
              alt="elite home official logo" />
              <div>
                <h2 className="footer-heading">Elite Homes</h2>
              </div>
            </div>
            <p className="footer_text mt-4">
              Find your perfect forever home </p>
              <p className="footer_text mt-4">in the San Francisco area with </p>
              <p className="footer_text mt-4">Elite Homes!</p>
          </Col>
          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Homes</h4>
              <ListGroup >
              <div className='link_list_item'>
                  <Link to='#'>1 Bedroom Homes</Link>
                </div>
                <div className='link_list_item'>
                  <Link to='#'>2 Bedroom Homes</Link>
                </div>
                <div className='link_list_item'>
                  <Link to='#'>3 Bedroom Home</Link>
                </div>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
          <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ListGroup >
                <div className='link_list_item'>
                  <Link to='/shop'>About</Link>
                </div>
                <div className='link_list_item'>
                  <Link to='/cart'>NewsLetter</Link>
                </div>
                <div className='link_list_item'>
                  <Link to='/login'>Login</Link>
                </div>
                <div className='link_list_item'>
                  <Link to='/privacy'>Privacy</Link>
                </div>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
          <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact Us</h4>
              <ListGroup >
                <div className='link_list_item'>
                  <span className='icons'><i class="ri-map-pin-line"></i></span>
                  <p> 345 14th street, San Francisco CA 94016</p>
                </div>
                <div className='link_list_item'>
                  <span className='icons'><i class="ri-phone-line"></i></span>
                  <p>+4155761848</p>
                </div>
                <div className='link_list_item'>
                  <span className='icons'><i class="ri-mail-line"></i></span>
                  <p>elitehome-help@gmail.com</p> 
                </div>
              </ListGroup>
            </div>
          </Col>
        
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
