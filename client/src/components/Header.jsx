import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">EXPRESSIFY</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
            <Link to={'/'}  className="nav-link">Home</Link>
              <Link to={'/dashboard'} className="nav-link">App</Link>
            </div>
            <div className="navbar-nav ml-auto">
            <Link to={'/contact-us'}> <button className="btn btn-primary">contact-us</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
