import React, { Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Grid } from '@mui/material';

const BlogSingle = ({ maxWidth, open, onClose, title, doc, image1, author, authorName, date, extraLines }) => {
    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body tp-blog-single-section">
                    <button className="modal-close" onClick={onClose}><i className="fa fa-close"></i></button>
                    <div className="tp-blog-content clearfix">
                        <div className="post">
                            <div className="entry-media">
                                <img src={image1} alt="" />
                            </div>
                            <ul className="entry-meta">
                                <li><img src={author} alt="" /> <Link href="/">By {authorName}</Link></li>
                                <li><Link href="/"><i className="fa fa-calendar-o" aria-hidden="true"></i>{date}</Link></li>
                            </ul>
                            <h2>{title}</h2>
                            <p>{doc}</p>
                            {extraLines && extraLines.map((line, index) => (
                                <div key={index}>{line}</div>
                            ))}
                        </div>

                        <div className="tag-share clearfix">
                            <div className="tag">
                                <ul>
                                    <li><Link href="/https://medium.com/@Alizay_Yousfzai">Follow on Medium for more</Link></li>
                               
                                </ul>
                            </div>
                            <div className="share">
                                <ul>
                                   <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100043075860805"><i className="fa fa-facebook"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://x.com/ayesha22496"><i className="fa fa-twitter"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alizay-ayeshah-b922b0350/"><i className="fa fa-linkedin"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alizay_ayesha/"><i className="fa fa-instagram"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/AlizayAyesha"><i className="fa fa-github"></i></a></li>

                               </ul>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
};

export default BlogSingle;
