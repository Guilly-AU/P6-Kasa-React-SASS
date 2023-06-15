import React from 'react';

import "../scss/banner.scss";

function Banner({ src, alt, text }) {
  return (
    <section className="container-banner">
      <img src={src} alt={alt} />
      <p className="texte-over">{text}</p>
    </section>
  );
}

export default Banner;
