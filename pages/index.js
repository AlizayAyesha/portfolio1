import React, {Fragment} from 'react';
import Hero from '../components/Hero/index';
import About from '../components/about/index';
import Service from '../components/Service/index';

import BlogSection from '../components/BlogSection/index';
import ContactSection from '../components/ContactSection/index';
import Footer from '../components/Footer/index';
import Testimonial from '../components/Testimonials/index';
import Portfolio from '../components/portfolio/index';
import Scrollbar from '../components/Scroolbar/index'
import Navbar from '../components/Navbar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Element} from 'react-scroll'
import useSWR from 'swr'

const HomePage =() => {
    return(
        <Fragment>
            <div className="br-app">
                <Navbar />
                <Element name='home'>
                    <Hero/>
                </Element>
                <Element name='about'>
                    <About/>
                </Element>
                <Element name="service">
                    <Service/>
                </Element>
                <Element name="portfolio">
                    <Portfolio/>
                </Element>
                <Testimonial/>
                
                <Element name="blog">
                    <BlogSection/>
                </Element>
                <Element name="contact">
                    <ContactSection/>
                </Element> 
                <Footer/>
                <Scrollbar/>
            </div>
        </Fragment>
    )
};
export default HomePage;


