import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Sliders from "../components/Slider";
import AccomodationList from "../data/logements.json"
import "../scss/accomodation.scss"


function Accomodation() {
  const { id } = useParams();
  const selectedAccomodation = AccomodationList.find(accomodation => accomodation.id === id);
  const pictures = selectedAccomodation.pictures

  return (
    <main>
      <Sliders
         slides= {pictures}>
      </Sliders>
      <section className="acc-description">
        <h1>{selectedAccomodation.title}</h1>
        <h2>{selectedAccomodation.location}</h2>
      </section>
      <section className="acc-collapse-wrapper">
        <Collapse 
          title={"description"}
          description={selectedAccomodation.description}>
        </Collapse>
        <Collapse
          title={"Équipements"}
          description={
          <ul>
            {selectedAccomodation.equipments.map((equipment, index) => (
              <li key={`${selectedAccomodation.id}-${index}`}>{equipment}</li>
            ))}
          </ul>
          }> 
        </Collapse>
      </section>
    </main>
  );
}


export default Accomodation;