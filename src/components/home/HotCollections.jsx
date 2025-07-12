import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HotCollections = () => {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  const responsiveOptions = {
    0: {
      items: 1,
    },

    400: {
      items: 1,
    },

    700: {
      items: 2,
    },

    800: {
      items: 3,
    },

    1100: {
      items: 4,
    },
  };

  useEffect(() => {
    async function getCollections() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections",
      );

      setCollection(data);
      setLoading(false);
    }

    getCollections();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2>Hot Collections</h2>
            <div className="small-border bg-color-2"></div>
          </div>
          {/* NOTE: react-slick would have been the better option here due to increased compatibility with react */}
          <OwlCarousel
            responsive={responsiveOptions}
            key={loading ? "loading" : collection.length} // forces remount when data arrives -
            // necessary for react-owl-carousel loading state since it expects the container and it's children to be fully present on the first render
            className="owl-theme"
            dots={false}
            margin={10}
            items={4}
            loop
            nav
          >
            {!loading
              ? collection.map((obj) => (
                  <div className="item" key={obj.id}>
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <Link to={`/item-details/${obj.nftId}`}>
                          <img
                            src={obj.nftImage}
                            className="lazy img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nft_coll_pp">
                        <Link to={`/author/${obj.authorId}`}>
                          <img
                            className="lazy pp-coll"
                            src={obj.authorImage}
                            alt=""
                          />
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <Link to={`/item-details/${obj.nftId}`}>
                          <h4>{obj.title}</h4>
                        </Link>
                        <span>ERC-{obj.code}</span>
                      </div>
                    </div>
                  </div>
                ))
              : new Array(4).fill(0).map((_, index) => (
                  <div className="item" key={index}>
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <div
                          className="skeleton-box"
                          style={{ width: "100%", height: "200px" }}
                        />
                      </div>
                      <div className="nft_coll_pp">
                        <div
                          className="skeleton-box"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <div
                          className="skeleton-box"
                          style={{ width: "100px", height: "20px" }}
                        />
                        <br />
                        <div
                          className="skeleton-box"
                          style={{ width: "60px", height: "20px" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
