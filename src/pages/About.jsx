import React from "react";
import Banner from "../components/Banner";
import imgAbout from "../assets/Image-Banner-about.png";
import Collapse from "../components/Collapse";
import AboutList from "../data/about.json";
import "../scss/about.scss";

function About() {
  return (
    <main className="about">
      <Banner src={imgAbout} alt="Paysage de montagne eneigé" />
      <section className="about-collapse">
        {AboutList.map((list) => (
          <Collapse
            key={list.id}
            title={list.title}
            description={list.description}
          ></Collapse>
        ))}
      </section>
    </main>
  );
}

export default About;
