import React from "react";
import { Link } from "react-router-dom";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <i className="fa fa-image"></i>
              <span>Art</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <i className="fa fa-music"></i>
              <span>Music</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              <i className="fa fa-search"></i>
              <span>Domain Names</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <i className="fa fa-globe"></i>
              <span>Virtual Worlds</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <i className="fa fa-vcard"></i>
              <span>Trading Cards</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <i className="fa fa-th"></i>
              <span>Collectibles</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
