import React, { useState } from 'react';
import PortfolioSingle from '../portfolioSingle';

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState({});

  // Open modal with selected portfolio item
  const handleClickOpen = (portfolioItem) => {
    setSelectedPortfolio(portfolioItem); // Set portfolio item before opening modal
    setOpen(true);
  };

  // Close modal and reset selected portfolio item
  const handleClose = () => {
    setOpen(false);
    setSelectedPortfolio({});
  };

  // Portfolio data
 const portfolio = [
  {
   
  Id: "1",
  heading: "Minimalism",
  subHeading: "Web Development",
  authorName: "Robert William",
  value: "$500",
  date: "25 Nov 2024",
  quoteText: 'Working with this team was a great experience. Their minimalistic design approach helped convey the message clearly and effectively.',
  videosId: "LUSa3yRTB9A",
  pImg1: "/images/protfolio/minimalism/img-1.jpg",
  des: "An expert web designer and developer specializing in minimalistic designs. Focused on creating clean, modern landing pages that engage users and provide intuitive user experiences. Combining aesthetics and functionality for impactful web solutions."
  },
  {
    Id: "2",
    heading: "Fashion",
    subHeading: "Web Development",
    authorName: "David Warner",
    value: "$400",
    date: "15 Jan 2023",
    quoteText: "The abstract elements were beyond my expectations. The team was highly professional and delivered exactly what I wanted.",
    videosId: "r_hYR53r61M",
    pImg1: "/images/protfolio/abstract/img-1.jpg",
    des: "Abstract Art Landing Page Design App Development Mobile and Website Design. Focused on artistic and abstract elements. Designs that push boundaries and evoke emotion, creating visually dynamic experiences."
  },
  {
    Id: "3",
    heading: "3D Product",
    subHeading: "Web Development",
    authorName: "Ken Wiliamm",
    value: "$900",
    date: "12 Mar 2022",
    quoteText: "The 3D elements integrated into the project were incredible. The design provided an immersive experience for our users.",
    videosId: "LUSa3yRTB9A",
    pImg1: "/images/protfolio/3d/img-1.jpg",
    des: "3D Project Landing Page Design App Development Mobile and Website Design. Integrating 3D design with modern web technologies, creating interactive and immersive experiences that captivate users."
  },
  {
    Id: "4",
    heading: "Modern Website",
    subHeading: "Web Development",
    authorName: "Lily Aney",
    value: "$800",
    date: "09 Oct 2021",
    quoteText: "The modern backgrounds gave our website a sleek and professional look. We couldn’t have asked for a better result.",
    videosId: "r_hYR53r61M",
    pImg1: "/images/protfolio/modern/img-1.jpg",
    des: "Modern BG Landing Page Design App Development Mobile and Website Design. Clean and modern backgrounds designed to enhance your digital presence with a professional and fresh look."
  },
  {
    Id: "5",
    heading: "Contact Form",
    subHeading: "Web Development",
    authorName: "Aliza mart",
    value: "$1000",
    date: "06 April 2020",
    quoteText: "The visual storytelling was on point. Our audience engaged immediately and the design communicated our message perfectly.",
    videosId: "LUSa3yRTB9A",
    pImg1: "/images/protfolio/visual/img-1.jpg",
    des: "Visual Design Landing Page Design App Development Mobile and Website Design. Focusing on visuals that communicate messages effectively through compelling design and interactive elements."
  },
  {
    Id: "6",
    heading: "Ecommerce Website",
    subHeading: "Web Development",
    authorName: "Martin Gaptil",
    value: "$1200",
    date: "03 Jan 2020",
    quoteText: "The product design is outstanding. It’s functional, user-friendly, and visually appealing. We are thrilled with the outcome.",
    videosId: "r_hYR53r61M",
    pImg1: "/images/protfolio/pdesign/img-1.jpg",
    des: "Product Design Landing Page Design App Development Mobile and Website Design. Specializing in creative and functional product design that enhances user experience and meets business objectives."
  }
];


  return (
    <div className="tp-protfolio-area section-padding">
      <div className="container">
        <div className="col-12">
          <div className="section-title text-center">
            <span>Portfolio</span>
            <h2>Latest Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tp-protfolio-item">
              <div className="row">
                {portfolio.map((port, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 custom-grid" key={index}>
                    <div className="tp-protfolio-single">
                      <div className="tp-protfolio-img">
                        <img src={port.pImg1} alt={port.heading} />
                      </div>
                      <div className="tp-protfolio-text">
                        <h2>{port.heading}</h2>
                        <span>{port.subHeading}</span>
                        <button onClick={() => handleClickOpen(port)}>View Work</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Single Modal */}
      <PortfolioSingle
        open={open}
        onClose={handleClose}
        title={selectedPortfolio.heading}
        doc={selectedPortfolio.des}
        image1={selectedPortfolio.pImg1} // Only passing image1
        authorName={selectedPortfolio.authorName}
        videosId={selectedPortfolio.videosId}
        value={selectedPortfolio.value}
        date={selectedPortfolio.date}
        quoteText={selectedPortfolio.quoteText} // Added client review as a prop
      />

      {/* SVG Decoration */}
      <div className="white_svg svg_white">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300"></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
