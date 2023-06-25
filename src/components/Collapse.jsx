import React from "react";
import {useState} from "react";
import ArrowUp from "../assets/arrow-up.png";
import ArrowDown from "../assets/arrow-down.png";
import "../scss/collapse.scss"

function Collapse({ title, description }) {
   const [isTrigger, setIsTrigger] = useState(false)

   return isTrigger ? (
      <article className="collapse-container">
         <div className="title-wrapper">
            <h3 className="collapse-title-texte" key={title}>
               {title}
            </h3>
            <div
               className="btn-chevron"
               onClick={() => setIsTrigger(false)}>
                  <img src={ArrowDown} alt="Flèche vers le bas."/>
            </div>
         </div>
         <div className="description-wrapper" 
         key={description}>
            {description}
         </div>
      </article>
   ) : (
      <article className="collapse-container">
         <div className="title-wrapper">
            <h3 className="collapse-title-texte">{title}</h3>
            <div
               className="btn-chevron"
               onClick={() => setIsTrigger(true)}>
                  <img src={ArrowUp} alt="Flèche vers le haut."/>
               </div>
         </div>
      </article>
   )
}

export default Collapse
