import React, { Component } from 'react';
import { Link } from 'react-scroll'
import useSWR from 'swr'
class Header extends Component {

    state = {
        isOpen: false,

    }

    render() {

        return (
            <header id="header" className="site-header header-style-1">
                <nav className="navigation navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="open-btn" onClick={() => this.setState({ isOpen: true })}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="home">
                                <img src='images/logo.png' alt="" />
                            </Link>
                        </div>
                        <div id="navbar" className={this.state.isOpen ? "navbar-collapse navigation-holder active" : "navbar-collapse navigation-holder"}>
                            <button className="close-navbar" onClick={() => this.setState({ isOpen: false })}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <button className="close-navbar-2" onClick={() => this.setState({ isOpen: false })}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <ul className="nav navbar-nav">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" to="home">
                                        <img src='images/logo.png' alt="" />
                                    </Link>
                                </div>
                                <li className="home">
                                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link>
                                </li>
                                <li className="about">
                                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About Me</Link>
                                </li>
                                <li className="service">
                                    <Link activeClass="active" to="service" spy={true} smooth={true} duration={500}>Service</Link>
                                </li>
                                <li className="protfolio">
                                    <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link>
                                </li>
                                <li className="blog">
                                    <Link activeClass="active" to="blog" spy={true} smooth={true} duration={500}>Blog</Link>
                                </li>
                                <li className="contact">
                                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-open-btn-holder">
                            <button className="menu-open-btn" onClick={() => this.setState({ isOpen: true })}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;