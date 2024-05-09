import './Previews.css'
import './RareFindsPreview.css'

import { useState } from 'react'
import get_egg_image from './Images.js'

class RareFind {
	constructor(id, player_name, egg_name, egg_rarity) {
		this.id = id;
		this.player_name = player_name;
		this.egg_name = egg_name;
		this.egg_rarity = egg_rarity;
		this.egg_image = get_egg_image(egg_name);
	}
}

function RareFindsPreview() {
	let title = "Rare Finds";

	if (sessionStorage.getItem("devMode") === "true") {
		title += " (dev)";
	}

	const [rareFinds, setRareFinds] = useState([
		new RareFind(1, "nico371", "Nico", "10k"),
		new RareFind(2, "achaseiiix", "Cloned Carey", "1k"),
		new RareFind(3, "balake", "Cloned Raphael", "50k"),
	]);

	function changeEggImage(id) {
		const new_egg = prompt("Egg Name: ");

		const newList = rareFinds.filter((rareFind) => rareFind.id === id);
		newList[0] = {
			...newList[0],
			egg_image: get_egg_image(new_egg)
		}

		editRareFind(id, newList[0])
	}

	function editRareFind(id, newRareFind) {
		const newList = rareFinds.map((rareFind) => {
			if (rareFind.id === id) {
				const updatedRareFind = newRareFind;
				return (updatedRareFind);
			}
			return (rareFind);
		});

		setRareFinds(newList);
	}

	return (
		<div className="preview">
			<h1>{ title }</h1>
			{rareFinds.map((rareFind) => (
				<div className="rare-find" key={rareFind.id}>
						<div className="player-name">
							<p>{rareFind.player_name}</p>
						</div>
						<button onClick={() => changeEggImage(rareFind.id)}>
						<img src={rareFind.egg_image} onError={(e) => {e.currentTarget.src = "/assets/eggs/unknown.png"; e.currentTarget.onError = null;}} alt={rareFind.egg_name} />
						</button>
						<div className="egg-name">
							<p>{rareFind.egg_name}</p>
						</div>
						<div className="egg-rarity">
							<p>{rareFind.egg_rarity}</p>
						</div>
					{/* <p className='player-name'>{rareFind.player_name}</p>
					<p className='egg-name'>{rareFind.egg_name}</p>
					<p className='egg-rarity'>{rareFind.egg_rarity}</p> */}
					
				</div>
			))}
		</div>
	);
}

export default RareFindsPreview;