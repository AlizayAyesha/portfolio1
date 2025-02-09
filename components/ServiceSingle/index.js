import React from 'react';
import { Dialog, Grid } from '@mui/material';

const ServiceSingle = ({ 
    maxWidth, 
    open, 
    onClose, 
    title, 
    doc, 
    image1, 
    image2, 
    image3, 
    serviceId, // Add serviceId here
    extraDes // Add extraDes here
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="modalWrapper quickview-dialog"
            maxWidth={maxWidth}
        >
            <Grid className="modalBody modal-body">
                <button className="modal-close" onClick={onClose}>
                    <i className="fa fa-close"></i>
                </button>
                <div className="tp-minimals-wrap">
                    <div className="minimals-img">
                        <img src={image1} alt="Main Image" className="img-fluid" />
                    </div>
                </div>
                <div className="service-details-section">
                    <h4>{title}</h4>
                    <p>{doc}</p> {/* Correctly using the description (doc) */}

                     {/* Conditionally render additional paragraphs for service with specific IDs */}
                    {serviceId === "1" && (
                        <>
                           <p>
    A well-designed e-commerce website doesn’t just look good; it delivers a seamless shopping experience. 
    Using modern web technologies like <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, 
    I ensure fast, responsive, and engaging online stores that perform smoothly and scale efficiently.
</p>
<p>
    I specialize in creating <strong>dynamic e-commerce platforms</strong> that offer both functionality and a user-friendly experience. 
    From <strong>product galleries</strong> and interactive shopping carts to <strong>seamless checkout processes</strong>, I build solutions 
    that drive conversions and provide a smooth customer journey.
</p>
<p>
    Leveraging <strong>Next.js</strong> for server-side rendering and <strong>TypeScript</strong> for type safety, I create robust, scalable e-commerce sites. 
    Tailwind CSS allows me to design beautiful, mobile-first layouts that adapt to different screen sizes, offering users an optimized experience across devices.
</p>
<p>
    With my expertise in <strong>responsive design</strong> and <strong>interactive UI components</strong>, 
    I create an engaging shopping experience where users can easily browse products, add them to their carts, 
    and complete purchases—all while enjoying smooth animations and quick load times.
</p>
<p>
    If you're looking to build an e-commerce platform that not only looks great but performs even better, 
    my projects showcase the power of combining <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong> 
    to deliver modern, fast, and scalable online stores. Explore my work to see how these technologies come together to create exceptional e-commerce experiences.
</p>
  </>
                    )}
                    {serviceId === "2" && (
                        <>
                            <p>
    A well-designed website does more than just look appealing; it offers an intuitive experience that keeps users engaged. 
    Using modern web technologies like <strong>React</strong>, <strong>JavaScript</strong>, <strong>jQuery</strong>, <strong>HTML</strong>, and frameworks such as <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong>, 
    I ensure that your agency’s website is both fast and responsive, offering users an enjoyable browsing experience across all devices.
</p>
<p>
    I specialize in building <strong>creative agency templates</strong> that go beyond simple layouts, delivering dynamic and interactive experiences. 
    Whether it's a service showcase, portfolio, or an engaging landing page, I focus on creating digital experiences that leave a lasting impression and convert visitors into clients.
</p>
<p>
    Leveraging the power of <strong>React</strong>, <strong>Bootstrap</strong>, and <strong>Tailwind CSS</strong>, I design websites that are not only visually appealing but also optimized for performance. 
    These technologies allow me to build websites that load quickly, are fully responsive, and adapt to different screen sizes with ease. 
    You can trust that your website will run smoothly, no matter the device or screen resolution.
</p>
<p>
    The <strong>interactive galleries</strong>, <strong>portfolio sections</strong>, and <strong>service showcases</strong> I create are designed with your agency’s brand and needs in mind. 
    From fluid animations that draw attention to interactive elements that engage users, I bring your services to life in a way that resonates with your target audience.
</p>
<p>
    With a focus on both <strong>frontend and backend performance</strong>, I ensure seamless user experiences through custom development, smooth transitions, and easy-to-manage admin panels. 
    I also integrate modern features like <strong>contact forms</strong>, <strong>testimonial sections</strong>, and <strong>client showcase galleries</strong> that increase trust and conversions.
</p>
<p>
    Take a look at the <strong>agency templates</strong> I’ve created. These templates demonstrate my expertise in crafting professional, creative, and functional websites that drive results. 
    Each design is crafted to meet your specific needs, offering the flexibility to adapt and scale as your business grows. 
    Explore how I can help transform your agency’s digital presence with modern, client-friendly web solutions.
</p>
                        </>
                    )}
                    
                    {serviceId === "3" && (
                        <>
                           <p>
    A well-crafted design does more than just capture attention; it elevates your brand's identity and connects with your audience. 
    Using modern web technologies like <strong>HTML5</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>jQuery</strong>, 
    I create visually stunning and interactive designs that resonate with users and reflect your brand’s unique personality.
</p>
<p>
    I specialize in <strong>Creative Web Design</strong> that pushes the boundaries of conventional layouts. From stunning <strong>flip cards</strong> and engaging <strong>subscription pop-ups</strong> to 
    interactive animations, I design dynamic websites that offer seamless user experiences. My focus is on creativity, ensuring every element contributes to a cohesive and memorable user journey.
</p>
<p>
    Using advanced technologies like <strong>Sass</strong> for flexible styling, I create designs that are not only aesthetically pleasing but also optimized for performance. 
    Whether it's building visually appealing interactive galleries, dynamic product showcases, or immersive web animations, I make sure your brand stands out with cutting-edge design elements.
</p>
<p>
    I design responsive and interactive websites that adapt flawlessly to any device. From <strong>flip card effects</strong> that showcase your content in an engaging way to smooth animations that add personality to your site, 
    my goal is to craft unique experiences that align with your brand's vision and leave a lasting impression on your audience.
</p>
<p>
    Browse through the <strong>creative templates</strong> I’ve developed, which showcase the diversity and versatility of my design style. 
    Each template is thoughtfully crafted to serve different needs—from unique layout designs to interactive features. Let’s collaborate to turn your creative ideas into digital works of art that elevate your brand and captivate your audience!
</p>

                        </>
                    )}
                    {serviceId === "4" && (
                        <>
                            <p>
    In today’s digital world, a well-crafted website is more than just a design; it’s a seamless user experience that captivates visitors from the moment they land. 
    Leveraging cutting-edge frontend technologies like <strong>React.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, <strong>Sass</strong>, <strong>jQuery</strong>, and <strong>Bootstrap</strong>, 
    I build stunning, high-performance eCommerce websites that not only look impressive but also deliver exceptional usability and functionality.
</p>
<p>
    My expertise lies in creating <strong>responsive websites</strong> that adjust effortlessly across devices, ensuring your customers enjoy a smooth and consistent experience whether they’re browsing on desktop, tablet, or mobile. 
    Every project I undertake focuses on building interfaces that are intuitive, engaging, and visually striking.
</p>
<p>
    I specialize in <strong>frontend design</strong> that goes beyond just code—it's about creating dynamic, user-centered experiences. By combining <strong>creative design</strong> with seamless responsiveness, 
    I ensure that your site performs beautifully at every screen size, from small mobile devices to large desktop screens. 
    Whether it's a sleek product catalog or a dynamic checkout experience, I build engaging digital environments that drive conversions and boost customer satisfaction.
</p>
<p>
    For my most recent work, I created an eCommerce website using <strong>React.js</strong> and <strong>TypeScript</strong>, leveraging <strong>Tailwind CSS</strong> and <strong>Sass</strong> for highly customizable, responsive layouts. 
    With <strong>jQuery</strong> for smooth interactions and <strong>Bootstrap</strong> for structured components, I ensure a visually appealing and functional interface that adapts to your audience’s needs.
</p>
<p>
    If you’re looking to enhance your online presence and create an experience that’s as dynamic as your brand, I invite you to explore the work I’ve done. 
    Let’s create something that’s not just a website, but an immersive experience that keeps your visitors coming back!
</p>

                        </>
                    )}
                    {serviceId === "5" && (
                        <>
                           <p>
    At the intersection of art and technology, I craft visually stunning digital illustrations and interactive graphics that captivate and engage. 
    Using a combination of modern frontend technologies like <strong>Sass</strong>, <strong>jQuery</strong>, <strong>Bootstrap</strong>, <strong>Tailwind CSS</strong>, and creative animations, 
    I bring your concepts to life in the digital world. From <strong>cat animations</strong> to <strong>penguin skyscrapers</strong>, and even a <strong>night-to-day switch</strong> with Batman hover effects—every detail is meticulously designed for maximum interaction and enjoyment.
</p>
<p>
    I specialize in creating <strong>unique, interactive galleries</strong> where art meets code. Each animation and effect is crafted to not only showcase creativity but to also draw visitors in, encouraging them to explore and engage with every detail. Whether it's a <strong>cat running across the screen</strong> or <strong>penguins building skyscrapers</strong>, I aim to provide experiences that stand out.
</p>
<p>
    The websites I design aren’t just visually engaging; they also create an immersive experience. With <strong>interactive graphics</strong>, <strong>dynamic hover effects</strong>, and smooth transitions, 
    users are drawn into an environment where every interaction feels fresh and exciting. I believe that a website should be more than just a place to visit—it should be a space that captures imagination and keeps users coming back to explore its unique features.
</p>
<p>
    I’ve also crafted websites where elements like the <strong>Batman hover effect</strong> add a playful touch to the user experience, while the <strong>day-to-night switch</strong> creates a visually appealing transformation that makes every visit feel like a journey. My goal is to make each interaction memorable, ensuring that every visitor enjoys a unique and fun experience.
</p>
<p>
    Explore my work and see how I use art and technology to create websites that are as interactive as they are beautiful. 
    Whether you're looking for a creative gallery or an interactive experience, I can help turn your ideas into digital art that’s not only eye-catching but also a joy to explore!
</p>

                        </>
                    )}
                  {serviceId === "6" && (
  <>
    <p>
      I specialize in delivering visually captivating solutions that elevate your brand’s identity and drive audience engagement. With an eye for detail and a deep understanding of design principles, I utilize cutting-edge tools like <strong>Adobe Photoshop</strong>, <strong>Illustrator</strong>, <strong>After Effects</strong>, and advanced AI-powered design tools to create high-quality, attention-grabbing visuals tailored to your brand’s needs.
    </p>
    <p>
      Whether you need stunning <strong>thumbnails</strong>, impactful <strong>social media graphics</strong>, or memorable <strong>branding elements</strong>, I ensure every design is meticulously crafted to not only stand out but also deliver results. My designs are strategically developed to maximize engagement, drive interaction, and leave a lasting impression on your audience.
    </p>
    <p>
      My approach combines both creativity and technical expertise to produce clean, polished visuals that attract and retain viewers. I pay close attention to every detail, from the overall layout to the smallest visual elements, ensuring that each design is visually cohesive and engaging across all platforms.
    </p>
    <p>
      <strong>Additional Tools I Leverage to Deliver Exceptional Visual Content:</strong>
      <ul>
        <li><strong>Adobe Premiere Pro</strong> – Creating dynamic <strong>motion graphics</strong> and eye-catching <strong>video thumbnails</strong></li>
        <li><strong>Procreate</strong> – Crafting <strong>digital illustrations</strong> with intricate detail and precision</li>
        <li><strong>Midjourney</strong> & <strong>DALL·E</strong> – Generating unique <strong>AI-driven creative assets</strong> for innovative design solutions</li>
        <li><strong>Blender</strong> – Designing <strong>3D thumbnails and animations</strong> that bring your content to life</li>
        <li><strong>LottieFiles</strong> – Incorporating <strong>animated UI/UX graphics</strong> that engage and captivate your audience</li>
      </ul>
    </p>
    <p>
      Each tool is selected to ensure your designs are not only visually stunning but also strategically optimized to maximize viewer interaction. Whether it’s for a YouTube channel, a marketing campaign, or a product launch, I provide tailored visual content that aligns perfectly with your brand's goals.
    </p>
    <p>
      Let’s collaborate to create visually engaging assets that not only look exceptional but also drive performance and increase audience engagement. With my expertise in thumbnails and visual enhancements, your brand will stand out with clean, professional, and captivating designs.
    </p>
  </>
)}

                   <div className="row">
    <div className="col-md-6 col-sm-6 col-12 mb-3">
        <div className="service-details-img">
            <img src={image2} alt="Image 2" className="img-fluid" />
        </div>
    </div>
    <div className="col-md-6 col-sm-6 col-12 mb-3">
        <div className="service-details-img">
            <img src={image3} alt="Image 3" className="img-fluid" />
        </div>
    </div>
</div>

                    <p>{extraDes}</p> {/* Extra Description */}
                </div>
            </Grid>
        </Dialog>
    );
};

export default ServiceSingle;
