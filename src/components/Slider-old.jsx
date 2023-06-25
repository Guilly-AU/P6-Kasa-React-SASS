import React from "react";
import { useState } from "react";
import "../scss/slider.scss"
import { ReactComponent as ChevronLeft } from "../assets/chevron-left-solid.svg";
import { ReactComponent as ChevronRight } from "../assets/chevron-right-solid.svg";

function Carrousel ({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slides.length;

  const previousImage = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }
  

  const nextImage = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  } 

  return (
  <section className="slider-wrap">
    <div 
      className="left-arrow" 
      onClick={previousImage}>
        <ChevronLeft/>
    </div>
    <div 
      className="right-arrow" 
      onClick={nextImage}>
        <ChevronRight/>
    </div>
    <div className="img-slider">
      {slides[currentIndex]}
    </div>
  </section>
  
 );
}

export default Carrousel