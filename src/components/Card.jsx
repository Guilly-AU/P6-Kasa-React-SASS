import React from 'react'
import AccomodationList from '../data/logements.json'
import "../scss/card.scss"

function Card() {
  return (
    <section className='card'>
      <div className='card-wrapper'>
        {AccomodationList.map((list) => (
          <article className="card-container" key={list.id}> 
            <img className='card-img' src={list.cover} alt={list.title}/>
            <h2>{list.title}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Card;