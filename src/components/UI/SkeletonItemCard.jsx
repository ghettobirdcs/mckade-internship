import React from "react";

const SkeletonItemCard = ({ index }) => {
  return (
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
  );
};

export default SkeletonItemCard;
