import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

const ItemCard = ({
  item,
  authorImage = item.authorImage,
  authorId = item.authorId,
  hasTimer = true,
}) => {
  return (
    <div className="item" key={item.id}>
      <div className="nft__item">
        <div className="author_list_pp">
          <Link
            to={`/author/${authorId}`}
            // data-bs-toggle="tooltip"
            // data-bs-placement="top"
            // TODO: Get author's name here somehow
            // title={`Creator: ${item.authorId}`}
          >
            <img className="lazy" src={authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        {hasTimer && <Timer expiryDate={item.expiryDate} />}

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
  );
};

export default ItemCard;
