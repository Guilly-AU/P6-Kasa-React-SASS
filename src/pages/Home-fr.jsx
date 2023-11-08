import React from "react";
import Banner from "../components/Banner";
import imgHome from "../assets/Image-Banner-Home.png";
import Card from "../components/Card";
import AccomodationList from "../data/logements.json";

function Home() {
  return (
    <main>
      <Banner
        src={imgHome}
        alt="Paysage de falaise"
        text="Chez vous, partout et ailleurs"
      />
      <section className="card">
        <div className="card-wrapper">
          {AccomodationList.map((list) => (
            <Card
              key={list.id}
              id={list.id}
              title={list.title}
              cover={list.cover}
            ></Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
