import React, { Fragment } from 'react';
import { Dialog, Grid } from '@mui/material';

const PortfolioSingle = ({ maxWidth, open, onClose, title, doc, image1, image2, image3, authorName, quoteText, videosId, value, date }) => {
    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-project-details-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tp-minimal-wrap">
                                    <div className="tp-minimal-img">
                                        {/* Display image1, or fallback to a default image if not provided */}
                                        <img src={image1 || "/images/default-image.jpg"} alt="Project Thumbnail" />
                                    </div>
                                    <h2>{title}</h2>
                                </div>
                                <div className="tp-project-details-list">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="tp-project-details-text">
                                                <span>Client</span>
                                                <h2>{authorName}</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="tp-project-details-text-3">
                                                <span>Project Value</span>
                                                <h2>{value}</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="tp-project-details-text">
                                                <span>Date</span>
                                                <h2>{date}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-p-details-section">
                                    <p>{doc}</p>
                                    <div className="row">
                                        {/* Display image2, or skip if not provided */}
                                        {image2 && (
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <div className="tp-p-details-img">
                                                    <img src={image2} alt="Project Image 1" />
                                                </div>
                                            </div>
                                        )}
                                        {/* Display image3, or skip if not provided */}
                                        {image3 && (
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <div className="tp-p-details-img">
                                                    <img src={image3} alt="Project Image 2" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                               <div className="tp-p-details-quote">
 <p><em>{quoteText}</em><strong> - {authorName}</strong></p>
                               </div>

                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
};

export default PortfolioSingle;
