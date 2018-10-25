import React from "react";
import "../stylesheets/SearchItem.css";
import "../stylesheets/card.css";

export default function SearchItem({ title, price, thumbnail }) {
  return (
    <React.Fragment>
      <h5>{title}</h5>
      <p>${price.toLocaleString("de-DE")}</p>
      <img src={thumbnail} alt="Item thumbnail" />
    </React.Fragment>
  );
}
