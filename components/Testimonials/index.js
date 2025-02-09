import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSWR from 'swr'
class Testimonial extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            arrows: true,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 30,
            focusOnSelect: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="testimonial-area">
                <div className="container">
                    <div className="testimonial-active">
                        <div className="testimonial-wrap">
                            <Slider {...settings}>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <div className="testimonial-img">
                                            <img src='images/testimonial/1.jpg' alt="" />
                                        </div>
                                        <div className="testimonial-content">
                                            <h4>Nancy Anderson</h4>
                                            <span>SEO of digita</span>
                                            <p>"Working with Alizay Ayesha has been a transformative experience for my business. As a web designer and developer. The modern website looks stunning but also functions seamlessly. looking to elevate your online presence, I can't recommend her highly enough!"</p>
                                        </div>
                                        <div className="testimonial-icon">
                                            <i className="fi flaticon-right-quote"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <div className="testimonial-img">
                                            <img src='images/testimonial/2.jpg' alt="" />
                                        </div>
                                        <div className="testimonial-content">
                                            <h4>Lily Watson</h4>
                                            <span>SEO of Art</span>
                                            <p>"Alizay Ayesha is a phenomenal React developer! She expertly crafted our user interface, creating a seamless and engaging experience for our users. Her attention to detail and innovative design choices have truly elevated our website. The responsiveness and performance of our site have greatly improved, thanks to her expertise. We highly recommend her for any frontend project!"</p>
                                        </div>
                                        <div className="testimonial-icon">
                                            <i className="fi flaticon-right-quote"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <div className="testimonial-img">
                                            <img src="images/testimonial/3.jpg" alt="" />
                                        </div>
                                        <div className="testimonial-content">
                                            <h4>Martin Gaptil</h4>
                                            <span>SEO of Alka</span>
                                            <p>"Her ability to turn ideas into sleek, modern websites is truly impressive. She brought my vision to life with creativity and precision,The animations and design elements have transformed my site a stunning online presence. I highly recommend her services!"</p>
                                        </div>
                                        <div className="testimonial-icon">
                                            <i className="fi flaticon-right-quote"></i>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
              
  <div className="white_svg">
    {/* 
    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
      <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300"></polygon>
    </svg> 
    */}
  </div>




            </div>




        );
    }
}

export default Testimonial;