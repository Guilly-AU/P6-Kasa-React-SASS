import { React, useState } from "react";
import ArrowLeft from "../assets/arrow-left.png"
import ArrowRight from "../assets/arrow-right.png"
import "../scss/slider.scss"

function Sliders ({slides}) {
   const [indexSlide, setCurrent] = useState(0)

   const nbSlide = slides.length

   const nextImage = () => {
      setCurrent(indexSlide === nbSlide -1 ? 0 : indexSlide + 1)
   }

   const previousImage = () => {
      setCurrent(indexSlide === 0 ? nbSlide -1 : indexSlide -1)
   }

  console.log(nbSlide);
  console.log(nbSlide -1);
  console.log(indexSlide);

   return (
      <section className="slider">
         {nbSlide > 1 && (
            <>
               <img 
                  src={ArrowLeft} 
                  alt="Flèche gauche" 
                  className="arrow arrow-left" 
                  onClick={previousImage}
               />
               <img 
                  src={ArrowRight} 
                  alt="Flèche droite" 
                  className="arrow arrow-right" 
                  onClick={nextImage}
               />
               <div className="numbering">
                  {indexSlide+1}/{nbSlide}
               </div>
            </>
         )}
         {slides.map ((item, index) => (
            <div key={index} className={index === indexSlide ? 'slide active' : 'slide'}>
               {index === indexSlide && 
                  <img 
                     className="image" 
                     src={item} 
                     alt="Prise de vue d'interieur"
                  />
               }
            </div>
         ))}
      </section>
   )
}

export default Sliders

// if(!Array.isArray(slides) || slides.nbSlide <= 0) {
//    return null;
//  }