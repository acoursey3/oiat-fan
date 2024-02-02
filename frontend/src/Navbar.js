import './Navbar.css'

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

	return (
		<nav className="navbar">
			<a href="/" id="title">One in a Website</a>
			<div className="spacer-fill"></div>
			<img onClick={devLogin} src="http://localhost:5000/api/get_egg_image/Nico" alt="Nico371" />
			<img onClick={devLogin} src="http://localhost:5000/api/get_egg_image/Cloned Carey" alt="AchaseIIIX" />
			<img onClick={devLogin} src="http://localhost:5000/api/get_egg_image/Cloned Raphael" alt="Balake" />
			<div className="spacer-fixed"></div>
		</nav>
	);
}

export default Navbar;