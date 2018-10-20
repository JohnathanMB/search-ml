import React from "react";
import "../stylesheets/SearchItem.css";

export default function SearchItem({ id, title, price, thumbnail }) {
  return (
    <div class="card card-4">
      <p>{id}</p>
      <p>{title}</p>
      <p>${price.toLocaleString("de-DE")}</p>
      <img src={thumbnail} alt="Item thumbnail" />
    </div>
  );
}
