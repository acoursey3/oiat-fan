import './Previews.css'
import './GlyphcardsPreview.css'

function GlyphcardsPreview() {
	let title = "Glyphcards";

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

export default GlyphcardsPreview;