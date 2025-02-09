import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a to="/home">
                                    <img src="images/logo.png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100043075860805"><i className="fa fa-facebook"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://x.com/ayesha22496"><i className="fa fa-twitter"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alizay-ayeshah-b922b0350/"><i className="fa fa-linkedin"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alizay_ayesha/"><i className="fa fa-instagram"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/AlizayAyesha"><i className="fa fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p>
  <i className="fa fa-copyright"></i> Copyright <span> 2025 portfolio. All rights reserved </span> 
  <br /> Thank You!

</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;