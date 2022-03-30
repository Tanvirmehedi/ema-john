import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import "./Review.css";

const Review = ({ item, handelRemoveItem }) => {
  const { img, name, price, quantity, shipping } = item;
  return (
    <div className="item-box">
      <div>
        <img src={img} alt={name} />
      </div>
      <div>price : $ {price}</div>
      <div>Quantity: {quantity}</div>
      <div>Shipping: {shipping}</div>
      <TrashIcon
        style={{ width: "30px", color: "brown", cursor: "pointer" }}
        onClick={() => handelRemoveItem(item)}
      ></TrashIcon>
    </div>
  );
};

export default Review;
