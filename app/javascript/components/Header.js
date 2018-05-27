import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Header = props => {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg px-0">
            <a className="navbar-brand" href="#">
              DRAFT<span className="secondary-text">VOTE</span>
            </a>
          </nav>
        </div>
      </header>
      {props.children}
    </div>
  );
};

export default Header;
