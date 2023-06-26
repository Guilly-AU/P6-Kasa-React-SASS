import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Sliders from "../components/Slider";
import AccomodationList from "../data/logements.json"
import "../scss/accomodation.scss"
import Rating from "../components/Rating";


function Accomodation() {
  const { id } = useParams();
  const accomodation = AccomodationList.find(accomodation => accomodation.id === id);
  const pictures = accomodation.pictures

  return (
    <main>
      <Sliders
         slides= {pictures}>
      </Sliders>
      <section className="info">
        <div className="left-info">
          <article className="acc-description">
            <h1>{accomodation.title}</h1>
            <h2>{accomodation.location}</h2>
          </article>
          <article className="acc-tag">
            <>
              {accomodation.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </>
          </article>
        </div>
        <div className="right-info">
          <article className="acc-owner">
                <h3>{accomodation.host.name}</h3>
                <img src={accomodation.host.picture} alt={`Portrait de ${accomodation.host.name}`}/>
          </article>
          <Rating
            starRating={accomodation.rating}>
          </Rating>
        </div>
      </section>
      <section className="acc-collapse-wrapper">
        <Collapse 
          title={"description"}
          description={accomodation.description}>
        </Collapse>
        <Collapse
          title={"Équipements"}
          description={
          <ul>
            {accomodation.equipments.map((equipment, index) => (
              <li key={`${accomodation.id}-${index}`}>{equipment}</li>
            ))}
          </ul>
          }> 
        </Collapse>
      </section>
    </main>
  );
}


export default Accomodation;