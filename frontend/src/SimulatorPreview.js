import './Previews.css'
import './SimulatorPreview.css'

function SimulatorPreview() {

	let title = "Simulator";

	if (sessionStorage.getItem("devMode") === "true") {
		title += " (dev)";
	}

	return (
		<div className="preview">
			<h1>{ title }</h1>
			<p>Coming soon...</p>
		</div>
	);
}

export default SimulatorPreview;