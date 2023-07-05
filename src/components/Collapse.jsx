import React, {useRef, useState} from "react";
import ArrowUp from "../assets/arrow-up.png";
import "../scss/collapse.scss"

function Collapse({ title, description }) {
   const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => {
    setIsOpen(!isOpen);
   };

   const contentRef = useRef();

  return (
   <article className="collapse-container">
      <div className="title-wrapper">
         <h3 className="collapse-title-texte" key={title}>{title}</h3>
         <div onClick={handleToggle}>
            <img 
            className={isOpen ? "arrow-rotate down" : "arrow-rotate"} 
            src={ArrowUp} 
            alt={isOpen ? "Flèche vers le bas." : "Flèche vers le haut."}/>
         </div>
      </div>
      <div className="content-parent"
         ref={contentRef} 
         style={isOpen ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
            <div className="description-wrapper">
            {Array.isArray(description) ? (
               <ul>
                  {description.map((item, index) => (
                  <li key={index}>{item}</li>
                  ))}
               </ul>
            ) : ( 
               <p>{description}</p>
            )}
            </div>
      </div>
   </article>
  )
}

export default Collapse;