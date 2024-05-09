import './Navbar.css'

import get_egg_image from './Images.js'

function Navbar() {

	const devLogin = () => {
		let password = prompt("Password: ");
		if (password === "dev") {
			sessionStorage.setItem("devMode", "true");
			window.location.reload();
		}
		else {
			alert("Incorrect password.");
		}
	}

	const nico = get_egg_image("Nico")
	const achaseiiix = get_egg_image("Cloned Carey")
	const balake = get_egg_image("Cloned Raphael")

	return (
		<nav className="navbar">
			<a href="/" id="title">One in a Website</a>
			<div className="spacer-fill"></div>
			<img onClick={devLogin} src={nico} alt="Nico371" />
			<img onClick={devLogin} src={achaseiiix} alt="AchaseIIIX" />
			<img onClick={devLogin} src={balake} alt="Balake" />
			<div className="spacer-fixed"></div>
		</nav>
	);
}

export default Navbar;