import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const headerPropTypes = {
  className: PropTypes.string,
};

const Header = ({ className }) => (
  <div className={className}>
    <div className="header__container">
    <span className="header__span navbar-brand">
          <FontAwesomeIcon className="d-inline-block" icon={faListAlt} size="lg" alt="List emoji" />
        </span>
        <span className="header__span">Todo App</span>
      <nav className="navbar">  
  <a class="active" href="#home">Home</a>
 <a href="#contact">Contact</a>
  <a href="#about">About</a>
       
      </nav>
    </div>
  </div>
);

Header.propTypes = headerPropTypes;

export default Header;
