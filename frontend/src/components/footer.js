import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <p className='p'>2023 Joan Díaz Pernías &copy; All Rights Reserved.</p>
            <nav className="footer-nav justify-content-center">
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/terms">Terms and Conditions</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
