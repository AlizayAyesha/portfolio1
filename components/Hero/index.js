import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithubAlt, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section id="home" className="hero hero-slider-wrapper hero-style-1">
      <div className="hero-slider">
        <div className="slide" style={{ backgroundImage: `url('/images/slide.jpg')` }}>
          <div className="container">
            <div className="row">
              <div className="col col-md-10 col-sm-12 slide-caption">
                <div className="slide-subtitle">
                  <h4>I Am Alizay Ayesha</h4>
                </div>
                <div className="slide-title">
                  <h2>FullStack Dev</h2>
                  <h3 className="text-white">AI dev</h3>
                  <h3 className="text-white">ML Engineer</h3>
                </div>
                <div className="btns">
                  <Link href="#contact" className="template-btn go-contact-area">
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <div className="overlay"></div>
        <ul>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100043075860805">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlizayAyesha">
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alizay_ayesha/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </ul>
      </div>

      {/* White SVG Shape */}
      <div className="white_svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300"></polygon>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
