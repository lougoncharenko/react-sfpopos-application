import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import './Header.css'
import {Container, Row} from 'reactstrap'

const Header = () => {
    const [showMobileLinks, setShowMobileLinks] = useState(false);
    const handleMobileMenu = () => {setShowMobileLinks(!showMobileLinks)}
       

    const MobileLinks = () => {
        return (
            <section className="mobile_container_nav_links" role="navigation" aria-describedby="mobile_container_nav_links">
            <ul>
                  <li className="nav_item" aria-describedby="nav_item">
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li className="nav_item" aria-describedby="nav_item">
                    <NavLink to='/about'>About</NavLink>
                  </li>
                  <li className="nav_item" aria-describedby="nav_item">
                    <NavLink to='/newsletter'>Newsletter</NavLink>
                  </li>
                </ul>
            </section>  
        )
    }

  return (
    <header className='header'>
      <Container>
        <Row role="row">
        <section className="mobile_container" role="navigation">
            <section className="mobile_menu_header">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24"
            onClick={handleMobileMenu}>
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#000"></path>
            </svg>
            <section className='logo_headers'>
                <h1>Elite Homes</h1>
              </section>
            </section>
            {showMobileLinks ? <MobileLinks/>  : null}
            </section>

        <section className="nav_wrapper">
            <section className="logo">
              <img src='https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg' 
              alt="elite home official logo" />
              <section className='logo_headers'>
                <h1>Elite Homes</h1>
                <p>Since 2011</p>
              </section>
            </section>
              <section className="navigation">
                <ul className="menu">
                  <li className="nav_item">
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='/about'>About</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='/newsletter'>Newsletter</NavLink>
                  </li>
                </ul>
              </section>
          </section>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
