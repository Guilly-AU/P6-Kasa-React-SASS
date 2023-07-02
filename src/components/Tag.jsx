import React from "react";
import "../scss/tag.scss";

function Tag ({tag}) {

  return (
    <article className="tag">
      {tag.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </article>
  )
}

export default Tag

