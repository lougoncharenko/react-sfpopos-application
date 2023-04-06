import React from 'react';
import { NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css'
import {Container, Row} from 'reactstrap'

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src='https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg' alt="logo" />
              <div className='logo_headers'>
                <h1>Elite Homes</h1>
                <p>Since 2011</p>
              </div>
            </div>
              <div className="navigation">
                <ul className="menu">
                  <li className="nav_item">
                    <NavLink to='/home'>Home</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='/about'>About</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='/newsletter'>Newsletter</NavLink>
                  </li>
                </ul>
              </div>
              <div className="nav_icons">
              <Link to={'/cart'}><span className="cart_icon" >
                <i class="ri-shopping-cart-line ri-lg"></i>
                </span></Link>
              </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
