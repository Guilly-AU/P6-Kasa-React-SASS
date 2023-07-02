import { Link } from "react-router-dom"
import React from 'react'
import AccomodationList from '../data/logements.json'
import "../scss/card.scss"

function Card() {
	return (
		<section className='card'>
			<div className='card-wrapper'>
				{AccomodationList.map((list) => (
					<Link to={`/logement/${list.id}`} key={list.id}>
						<article className="card-container"> 
							<div className="filter"></div>
							<img className='card-img' src={list.cover} alt={list.title}/>
							<h2>
								{list.title}
							</h2>
						</article>
					</Link>
				))}
			</div>
	 	</section>
  	);
}

export default Card;