import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../UI/ItemCard";
import SkeletonItemCard from "../UI/SkeletonItemCard";

const ExploreItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [itemsToShow, setItemsToShow] = useState(8);

  useEffect(() => {
    async function getItems() {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`,
      );

      setItems(data.slice(0, itemsToShow));
      setLoading(false);
    }

    getItems();
  }, [filter, itemsToShow]);

  return (
    <>
      <div>
        <select
          id="filter-items"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading ? (
        new Array(8).fill(0).map((_, index) => (
          <div
            key={index}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <SkeletonItemCard index={index} />
          </div>
        ))
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <ItemCard item={item} />
            </div>
          ))}
        </>
      )}
      {itemsToShow < 16 && (
        <div className="col-md-12 text-center">
          <Link
            to="/explore"
            id="loadmore"
            className="btn-main lead"
            onClick={() => setItemsToShow(itemsToShow + 4)}
          >
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
