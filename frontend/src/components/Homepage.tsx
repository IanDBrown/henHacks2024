import "../css/App.css";

export default function Homepage() {
	return (
		<div className="container">
			<div className="title">
				<h1>Intelli Learn</h1>
			</div>
			<h1>An ethical AI!</h1>
			<div className="imageContainer">
				<img
					src="../assets/robot-image.png"
					alt="Image of a green friendly robot"
				/>
			</div>
		</div>
	);
}
