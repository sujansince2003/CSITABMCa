import React from "react";
import "./Product.css";
const Product = ({ img, title, link, id,desc}) => {
  return (
    <>
    <div className="wholediv">
      <a className="p" href={link} rel="noreferrer">


        <div className="card-items">
          <img src={img} alt="" className="event-img" />
          <span className="events-title">{title}</span>
          <p className="card-description">{desc} ...</p>

          <a href="" className="view"> View </a>
          <div className="view-bottom"></div>
        </div>

      </a>
      </div>
    </>
  );
};

export default Product;
