import "../css/App.css";
import image from "../assets/robot-image.png";
export default function Homepage() {
	return (
		<div className="container">
			<div className="title">
				<h1>Intelli Learn</h1>
				<button>Take a test!</button>
			</div>
			<h1>An ethical homework helping AI!</h1>
			<div className="imageContainer">
				<img src={image} alt="Image of a green friendly robot" />
			</div>
		</div>
	);
}
