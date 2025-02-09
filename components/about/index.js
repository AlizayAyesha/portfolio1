import React from 'react'
import DefaultModal from '../AboutModal'
import useSWR from 'swr'

const About = (props) => {

    return(
        <section id="about" className="tp-about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="tp-about-wrap">
                        <div className="tp-about-img">
                            <img src="images/about.jpg" alt=""/>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="tp-about-text">
                        <div className="tp-about-icon">
                            <i className="fi flaticon-web-design"></i>
                        </div>
                        <div className="tp-about-icon-content">
                            <h2>Professional and Dedicated Web Developer & AI Enthusiast</h2>
                            <p>
                                Looking for a skilled web developer to bring your ideas to life? I specialize in modern web development and AI-driven solutions to create dynamic, responsive, and engaging websites. Whether you need a sleek portfolio, a business website, or an advanced web application, I’ve got you covered!
                           
                            </p>
                             <h2>What I Offer:</h2>
    <ul style={{ color: "white" }}>
        <li><strong>Custom Web Development</strong> – Tailored websites that fit your brand’s needs.</li>
        <li><strong>AI & Machine Learning Integration</strong> – Enhancing applications with intelligent solutions.</li>
        <li><strong>Responsive & Mobile-Friendly Design</strong> – Ensuring a seamless experience on all devices.</li>
        <li><strong>User-Centered Design</strong> – Focusing on functionality and aesthetics.</li>
        <li><strong>SEO & Performance Optimization</strong> – Making your website fast and discoverable.</li>
    </ul>
    
                            <div className="signeture">
                                <span><img src="images/signeture.png" alt=""/></span>
                            </div>
                            <DefaultModal buttonClass={'template-btn'}/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white_svg svg_white">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </section>
    )
}

export default About;