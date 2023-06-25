import React from "react";
import { useState } from "react";
import ArrowLeft from "../assets/arrow-left.png"
import ArrowRight from "../assets/arrow-right.png"
import "../scss/slider.scss"

function Sliders ({slides}) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  console.log(length);
  console.log(current);
  const nextImage = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const previousImage = () => {
    setCurrent(current === 0 ? length -1 : current -1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

   return (
      <section className="slider">
         {length > 1 && (
         <>
            <img src={ArrowLeft} alt="Flèche gauche" className="arrow arrow-left" onClick={previousImage}/>
            <img src={ArrowRight} alt="Flèche droite" className="arrow arrow-right" onClick={nextImage}/>
            <div className="numbering">
               {current+1}/{length}
            </div>
         </>
         )}
         {slides.map ((slide, index) => (
         <div key={index} className={index === current ? 'slide active' : 'slide'}>
            {index === current && 
               <img className="image" src={slide} alt="Prise de vue d'interieur" />
            }
         </div>
         ))}
      </section>
   )
}

export default Sliders