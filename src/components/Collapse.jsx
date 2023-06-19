import React from "react";
import {useState} from 'react';
import { ReactComponent as ChevronDown } from "../assets/chevron-down-solid.svg";
import { ReactComponent as ChevronUp } from "../assets/chevron-up-solid.svg";

function Collapse (props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

return (
  <section className="collapse-container">
    <div className="title-wrapper">
      <h2 className="collapse-title-texte">{props.title}</h2>
      <div className={`btn-chevron ${isOpen ? 'active' : 'close'}`}
      onClick={toggling}>
        {isOpen ? (
          <ChevronDown/>
        ) : (
          <ChevronUp/>
        )}
      </div>
    </div>
    {isOpen && (
      <div className={`description-wrapper ${isOpen? 'active' : 'clsoe'}`}>
        <ul>
          <li>{props.description}</li>
        </ul>
      </div>
    )}
  </section>
);
}

export default Collapse