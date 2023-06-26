import React from "react";
import StarActive from "../assets/star-active.png"
import StarInactive from "../assets/star-inactive.png"
import "../scss/rating.scss"

function Rating ({starRating}) {

  const totalStars = 5;
  const range = [1, 2, 3, 4, 5]

  return (
    <article className="star-wrap">
      
      {/* {[...new Array(totalStars)].map((_, starIndex) =>  */}
      {range.map((_, starIndex) =>
        starIndex < starRating ? (
          <img key={starIndex} src={StarActive} alt="" />
        ) : (
          <img key={starIndex} src={StarInactive} alt="" /> 
        )
      )}
    </article>
  )
}


export default Rating