import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Timer from "../UI/Timer";
import ItemCard from "../UI/ItemCard";
import SkeletonItemCard from "../UI/SkeletonItemCard";

const NewItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const responsiveOptions = {
    0: {
      items: 1,
    },

    600: {
      items: 2,
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
              ? items.map((item) => <ItemCard item={item} />)
              : new Array(4)
                  .fill(0)
                  .map((_, index) => <SkeletonItemCard index={index} />)}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
