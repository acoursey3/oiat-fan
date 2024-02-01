import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

	if (sessionStorage.getItem("devMode") === null) {
		sessionStorage.setItem("devMode", "false");
	}

	return (
		<div className="App">
			<Navbar />
			<Home />
		</div>
	);
}

export default App;