import "../css/App.css";
import image from "../assets/robot-image.png";
export default function Homepage() {
	return (
		<div className="container">
			<div className="title">
				<h1>Intelli Learn</h1>
					<div className="subjectSelect">
						<select>
							<option value="0">Select a subject:</option>
							<option value="1">Reading</option>
							<option value="2">Math</option>
						</select>
					</div>
			</div>
			<h1>An ethical homework helping AI!</h1>
			<div className="imageContainer">
				<img src={image} alt="Image of a green friendly robot" />
			</div>
		</div>
	);
}
