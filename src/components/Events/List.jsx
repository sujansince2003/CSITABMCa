import React from "react";
import Product from "./Product/Product";
import { products } from "../../data";
import "./List.css";
const List = () => {
  return (
    <div className="pl events">
      <h1 className="event-heading">Some Events Organized By CSITA-BMC</h1>
      <div className="pl-texts"></div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            title={item.title}
            key={item.id}
            img={item.img}
            link={item.link}
            desc={item.desc.slice(0,150)}
          />
        ))}
      </div>
      <div className="">

      </div>
    </div>
  );
};

export default List;
