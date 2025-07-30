import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { useParams } from "react-router-dom";
import axios from "axios";

import Skeleton from "../components/UI/Skeleton";

const Author = () => {
  const { id } = useParams();
  const [authorData, setAuthorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    async function getAuthor() {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`,
      );

      setAuthorData(data);
      setLoading(false);
    }

    getAuthor();
  }, [id]);

  async function copyAddress(address) {
    await navigator.clipboard.writeText(address);
  }

  return (
    <>
      {!loading ? (
        <div id="wrapper">
          <div className="no-bottom no-top" id="content">
            <div id="top"></div>

            <section
              id="profile_banner"
              aria-label="section"
              className="text-light"
              data-bgimage="url(images/author_banner.jpg) top"
              style={{ background: `url(${AuthorBanner}) top` }}
            ></section>

            <section aria-label="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d_profile de-flex">
                      <div className="de-flex-col">
                        <div className="profile_avatar">
                          <img src={authorData.authorImage} alt="" />

                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              {authorData.authorName}
                              <span className="profile_username">
                                {authorData.tag}
                              </span>
                              <span id="wallet" className="profile_wallet">
                                {authorData.address}
                              </span>
                              <button
                                id="btn_copy"
                                title="Copy Text"
                                onClick={() => copyAddress(authorData.address)}
                              >
                                Copy
                              </button>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          <div className="profile_follower">
                            {following ? (
                              <>{authorData.followers + 1} followers</>
                            ) : (
                              <>{authorData.followers} followers</>
                            )}
                          </div>
                          <button
                            className="btn-main"
                            onClick={() => setFollowing(!following)}
                          >
                            {!following ? "Follow" : "Unfollow"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      <AuthorItems
                        authorImage={authorData.authorImage}
                        authorId={authorData.authorId}
                        nftCollection={authorData.nftCollection}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div id="wrapper">
          <div className="no-bottom no-top" id="content">
            <div id="top"></div>

            <section
              id="profile_banner"
              aria-label="section"
              className="text-light"
              data-bgimage="url(images/author_banner.jpg) top"
              style={{ background: `url(${AuthorBanner}) top` }}
            ></section>

            <section aria-label="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d_profile de-flex">
                      <div className="de-flex-col">
                        <div className="profile_avatar">
                          <Skeleton
                            width="150px"
                            height="150px"
                            borderRadius="50%"
                          />

                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              <Skeleton width="200px" />
                              <span className="profile_username">
                                <Skeleton width="100px" />
                              </span>
                              <span id="wallet" className="profile_wallet">
                                <Skeleton width="250px" />
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          <div className="profile_follower">
                            <Skeleton width="150px" height="40px" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      <AuthorItems nftCollection={[]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Author;
