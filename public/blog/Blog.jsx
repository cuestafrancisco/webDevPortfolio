/*  page under construction

import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import { Link } from "react-router-dom";

*/

const BlogCard = ({ index, title, image, description }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            {/* <img src={image} className="card-img" alt="..." /> */}
       
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="lead">{description}</p>
              <Link to={`${process.env.PUBLIC_URL}blog/${index}`}>
                Read more...{" "}
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { BlogBuilder };
