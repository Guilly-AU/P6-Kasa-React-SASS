import { Link } from "react-router-dom";
import React from "react";
import "../scss/card.scss";

function Card({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`} key={id}>
      <article className="card-container">
        <div className="filter"></div>
        <img className="card-img" src={cover} alt={title} />
        <h2>{title}</h2>
      </article>
    </Link>
  );
}

export default Card;
