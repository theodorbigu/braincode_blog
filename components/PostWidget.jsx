import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { getSimilarPosts, getRecentPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-card-blue shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl text-text-color mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-text-color text-sm">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <p className="text-[#9dadc1] pt-1">
            <Link href={`/post/${post.slug}`} className="text-md " key={index}>
              {post.title}
            </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
