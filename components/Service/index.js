import React, { useState } from 'react';
import ServiceSingle from '../ServiceSingle';
import { Button } from '@mui/material';

const Service = () => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({});

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item); // Set full item object, including extraDes
    };

    const service = [
        {
            Id: "1",
            sIcon: "fi flaticon-web-design",
            heading: "Web Design",
            Simg1: 'images/service-single/web-design/img-1.jpg',
            Simg2: 'images/service-single/web-design/img-2.jpg',
            Simg3: 'images/service-single/web-design/img-3.jpg',
            des: 'Designing visually stunning, user-friendly, and highly responsive websites that captivate audiences.',
            extraDes: 'A website that is not only beautiful but also easy to navigate. Leveraging cutting-edge design principles, I create intuitive user interfaces that enhance user experience and drive engagement.'
        },
        {
            Id: "2",
            sIcon: "fi flaticon-laptop",
            heading: "Web Development",
            Simg1: 'images/service-single/development/img-1.jpg',
            Simg2: 'images/service-single/development/img-2.jpg',
            Simg3: 'images/service-single/development/img-3.jpg',
            des: 'Developing scalable, efficient, and high-performing web applications tailored to meet business needs.',
            extraDes: 'Building web applications that not only function flawlessly but also scale with your business needs. From APIs to full-stack development, I ensure performance and security are top priorities.'
        },
        {
            Id: "3",
            sIcon: "fi flaticon-paint-palette",
            heading: "Creative Design",
            Simg1: 'images/service-single/creative/img-1.jpg',
            Simg2: 'images/service-single/creative/img-2.jpg',
            Simg3: 'images/service-single/creative/img-3.jpg',
            des: 'Creating unique and innovative design solutions to elevate brand identity..',
            extraDes: 'Transforming ideas into visually compelling designs that captivate audiences. Whether branding or UI/UX, my designs ensure strong brand presence and engagement.'
        },
        {
            Id: "4",
            sIcon: "fi flaticon-smartphone",
            heading: "Frontend Design & Responsive",
            Simg1: 'images/service-single/responsive/img-1.jpg',
            Simg2: 'images/service-single/responsive/img-2.jpg',
            Simg3: 'images/service-single/responsive/img-3.jpg',
            des: 'Ensuring seamless user experiences across all devices with cutting-edge frontend technologies.',
            extraDes: 'I specialize in crafting sleek, responsive, and user-friendly interfaces that adapt beautifully across all devices. A smooth UX ensures a higher engagement rate and better conversions.'
        },
        {
            Id: "5",
            sIcon: "fi flaticon-verified",
            heading: "Gallery and Drawing with Code",
            Simg1: 'images/service-single/branding/img-1.jpg',
            Simg2: 'images/service-single/branding/img-2.jpg',
            Simg3: 'images/service-single/branding/img-3.jpg',
            des: 'Exploring the intersection of art and technology by creating digital illustrations and interactive graphics using code.',
            extraDes: 'Through generative art and algorithmic creativity, I create stunning visuals using programming, blending design with logic for dynamic and interactive experiences.'
        },
        {
       Id: "6",
sIcon: "fi flaticon-operator",
heading: "Thumbnails and Visual Enhancements",
Simg1: 'images/service-single/support/img-1.jpg',
Simg2: 'images/service-single/support/img-2.jpg',
Simg3: 'images/service-single/support/img-3.jpg',
des: 'Creating high-quality, attention-grabbing thumbnails and boost engagement, while also providing 24/7 expert support.',
extraDes: "Delivering strategic, eye-catching, and compelling visual solutions designed to enhance brand identity and maximize audience interaction. I utilize industry-leading tools like Adobe Photoshop, Illustrator, After Effects, AI-powered design tools, Figma, and Canva to craft high-quality, attention-grabbing visuals. Whether it's thumbnails, social media graphics, or branding elements, I ensure each design is optimized for maximum impact and engagement."  

        },
    ];

    return (
        <div id="service" className="service-area section-padding">
            <div className="container">
                <div className="row">
                    {service.map((serv) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={serv.Id}>
                            <div className="service-section">
                                <div className="services-wrapper">
                                    <div className="services-icon-wrapper">
                                        <i className={serv.sIcon}></i>
                                    </div>
                                    <div className="service-content">
                                        <h2>{serv.heading}</h2>
                                        <p>{serv.des}</p>
                                        <Button
                                            className="btn"
                                            onClick={() => handleClickOpen(serv)}
                                        >
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                       <ServiceSingle
                open={open}
                onClose={handleClose}
                title={state.heading}
                doc={state.des} // Primary description
                extraDes={state.extraDes} // Unique additional content
                image1={state.Simg1}
                image2={state.Simg2}
                image3={state.Simg3}
                serviceId={state.Id} // Dynamically set the serviceId based on the clicked service
            />

        </div>
    );
};

export default Service;