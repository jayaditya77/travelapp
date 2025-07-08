import "./FooterStyles.css";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
          <h1>GhumoBengal</h1>
          <p>© 2025 GhumoBengal. Made by Jayaditya Mondal.</p>
        </div>
        <div className="links">
          <a href="/"><i className="fa-brands fa-square-facebook"></i></a>
          <a href="/"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="/"><i className="fa-brands fa-square-twitter"></i></a>
        </div>
        <div className="bottom">
          <div >
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">Liscence</a>
            <a href="/">All versions</a>
          </div>
          <div >
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Issue</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
          </div>
          <div >
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact us</a>
          </div>
          <div >
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Liscence</a>
          </div>
      </div>
    </div>
  );
};

export default Footer;
