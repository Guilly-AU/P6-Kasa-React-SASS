import React from "react"
import Banner from "../components/Banner"
import imgHome from "../assets/Image-Banner-Home.png"
import Card from "../components/Card"

function Home() {
	return (
	<main>
		<Banner 
			src={imgHome} 
			alt="Paysage de falaise" 
			text="Chez vous, partout et ailleurs" 
		/>
		<Card />
	</main>
	)
}

export default Home