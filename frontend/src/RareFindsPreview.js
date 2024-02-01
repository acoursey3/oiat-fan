import './Previews.css'
import './RareFindsPreview.css'

import { useState } from 'react';

function RareFindsPreview() {
	let title = "Rare Finds";

	if (sessionStorage.getItem("devMode") === "true") {
		title += " (dev)";
	}

	const [rareFinds, setRareFinds] = useState([
		{ id: 1, player_name: "nico371", egg_name: "Nico", egg_rarity: "10k", egg_image: "http://localhost:5000/api/get_egg_image/Nico" },
		{ id: 2, player_name: "achaseiiix", egg_name: "Cloned Carey", egg_rarity: "1k", egg_image: "http://localhost:5000/api/get_egg_image/Cloned Carey" },
		{ id: 3, player_name: "balake", egg_name: "Cloned Raphael", egg_rarity: "50k", egg_image: "http://localhost:5000/api/get_egg_image/Cloned Raphael" }
	]);

	return (
		<div className="preview">
			<h1>{ title }</h1>
			{rareFinds.map((rareFind) => (
				<div className="rare-find" key={rareFind.id}>

					<div className="player-name"></div>
					<div className="egg-name"></div>
					<div className="egg-rarity"></div>


					{/* <p className='player-name'>{rareFind.player_name}</p>
					<p className='egg-name'>{rareFind.egg_name}</p>
					<p className='egg-rarity'>{rareFind.egg_rarity}</p> */}
					<img src={rareFind.egg_image} alt={rareFind.egg_name} />
				</div>
			))}
		</div>
	);
}

export default RareFindsPreview;