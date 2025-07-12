import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Timer from "../UI/Timer";

const NewItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const responsiveOptions = {
    0: {
      items: 1,
    },

    500: {
      items: 1,
    },

    800: {
      items: 2,
    },

    900: {
      items: 3,
    },

    1100: {
      items: 4,
    },
  };

  useEffect(() => {
    async function getItems() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems",
      );

      setItems(data);
      setLoading(false);
    }

    getItems();
  }, []);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2>New Items</h2>
            <div className="small-border bg-color-2"></div>
          </div>
          <OwlCarousel
            responsive={responsiveOptions}
            key={loading ? "loading" : items.length} // forces remount when data arrives -
            // necessary for react-owl-carousel loading state since it expects the container and it's children to be fully present on the first render
            className="owl-theme"
            dots={false}
            margin={10}
            items={4}
            loop
            nav
          >
            {!loading
              ? items.map((item, index) => (
                  <div className="item" key={index}>
                    <div className="nft__item">
                      <div className="author_list_pp">
                        <Link
                          to={`/author/${item.authorId}`}
                          // data-bs-toggle="tooltip"
                          // data-bs-placement="top"
                          // TODO: Get author's name here somehow
                          // title={`Creator: ${item.authorId}`}
                        >
                          <img className="lazy" src={item.authorImage} alt="" />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
                      <Timer expiryDate={item.expiryDate} />

                      <div className="nft__item_wrap">
                        {/* <div className="nft__item_extra"> */}
                        {/*   <div className="nft__item_buttons"> */}
                        {/*     <button>Buy Now</button> */}
                        {/*     <div className="nft__item_share"> */}
                        {/*       <h4>Share</h4> */}
                        {/*       <a href="" target="_blank" rel="noreferrer"> */}
                        {/*         <i className="fa fa-facebook fa-lg"></i> */}
                        {/*       </a> */}
                        {/*       <a href="" target="_blank" rel="noreferrer"> */}
                        {/*         <i className="fa fa-twitter fa-lg"></i> */}
                        {/*       </a> */}
                        {/*       <a href=""> */}
                        {/*         <i className="fa fa-envelope fa-lg"></i> */}
                        {/*       </a> */}
                        {/*     </div> */}
                        {/*   </div> */}
                        {/* </div> */}

                        <Link to={`/item-details/${item.nftId}`}>
                          <img
                            src={item.nftImage}
                            className="lazy nft__item_preview"
                            alt="NFT"
                          />
                        </Link>
                      </div>
                      <div className="nft__item_info">
                        <Link to={`/item-details/${item.nftId}`}>
                          <h4>{item.title}</h4>
                        </Link>
                        <div className="nft__item_price">{item.price} ETH</div>
                        <div className="nft__item_like">
                          <i className="fa fa-heart"></i>
                          <span>{item.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : new Array(4).fill(0).map((_, index) => (
                  <div className="item" key={index}>
                    <div className="nft__item">
                      <div className="author_list_pp">
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

                      <div className="nft__item-wrap">
                        <div
                          className="skeleton-box"
                          style={{ width: "100%", height: "350px" }}
                        />
                      </div>

                      <div className="nft__item_info">
                        <div
                          className="skeleton-box"
                          style={{ width: "150px", height: "30px" }}
                        />
                        <div className="nft__item_price">
                          <div
                            className="skeleton-box"
                            style={{ width: "75px", height: "20px" }}
                          />
                        </div>
                        <div className="nft__item_like">
                          <div
                            className="skeleton-box"
                            style={{ width: "25px", height: "15px" }}
                          />
                        </div>
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

export default NewItems;
