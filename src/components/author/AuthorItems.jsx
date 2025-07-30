import React from "react";
import SkeletonItemCard from "../UI/SkeletonItemCard";
import ItemCard from "../UI/ItemCard";

const AuthorItems = ({ nftCollection = [], authorImage, authorId }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {nftCollection.length > 0
            ? nftCollection.map((nft) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={nft.id}
                >
                  <ItemCard
                    item={nft}
                    authorImage={authorImage}
                    authorId={authorId}
                    hasTimer={false}
                  />
                </div>
              ))
            : new Array(8).fill(0).map((_, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <SkeletonItemCard />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
