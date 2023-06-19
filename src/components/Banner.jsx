import React from 'react';
import "../scss/banner.scss";

function Banner({ src, alt, text }) {
  return (
    <section className="container-banner">
      <img src={src} alt={alt} />
      <h1 className="texte-over">{text}</h1>
    </section>
  );
}

export default Banner;
