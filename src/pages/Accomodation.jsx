import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../components/Collapse";
import Sliders from "../components/Slider";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import AccomodationList from "../data/logements.json"
import "../scss/accomodation.scss"

function Accomodation() {
	const { id } = useParams();
	const accomodation = AccomodationList.find(item => item.id === id);
	const navigate = useNavigate();
	
	useEffect(() => {
		if (!accomodation) {
			navigate("*");
			return null;
		} 
	}, [accomodation, navigate]);

	if (!accomodation) {
			return ;
 	}

	return (
		<main>
			<Sliders
				 slides= {accomodation.pictures}>
			</Sliders>
			<section className="info">
				<div className="left-info">
					<article className="acc-description">
						<h1>{accomodation.title}</h1>
						<h2>{accomodation.location}</h2>
					</article>
					<Tag
						tag={accomodation.tags}>
					</Tag>
				</div>
				<div className="right-info">
					<article className="acc-owner">
						<h3>{accomodation.host.name}</h3>
						<img 
							src={accomodation.host.picture} 
							alt={`Portrait de ${accomodation.host.name}`}
						/>
					</article>
					<Rating
						starRating={accomodation.rating}>
					</Rating>
				</div>
			</section>
			<section className="acc-collapse-wrapper">
				<Collapse 
					title={"Description"}
					description={accomodation.description}>
				</Collapse>
				<Collapse
					title={"Équipements"}
					description={accomodation.equipments}> 
				</Collapse>
			</section>
		</main>
	);
}


export default Accomodation;