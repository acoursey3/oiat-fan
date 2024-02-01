import './Home.css';
import RareFindsPreview from './RareFindsPreview';
import GlyphcardsPreview from './GlyphcardsPreview';
import SimulatorPreview from './SimulatorPreview';

function Home() {
	return (
		<div className="previews">
			<RareFindsPreview />
			<GlyphcardsPreview />
			<SimulatorPreview />
		</div>
	);
}

export default Home;