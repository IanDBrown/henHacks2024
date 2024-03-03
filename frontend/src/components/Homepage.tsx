import React, { useState, useEffect } from "react";
import "../css/App.css";
import image from "../assets/robot-image.png";
import { useNavigate } from "react-router-dom";

const Homepage: React.FC = () => {
	const [fadeIn, setFadeIn] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		setFadeIn(true); // Trigger the fade-in effect when the component mounts
	}, []);

	return (
		<div className={`container ${fadeIn ? "fade-in" : ""}`}>
			<div className="title">
				<h1 className="glowing-text">Intelli Learn</h1>
			</div>
			<h1>An ethical homework helping AI!</h1>
			<div className="imageContainer">
				<img src={image} alt="Image of a green friendly robot" />
			</div>
			<button onClick={() => navigate("/quiz")}>Take a Quiz!</button>
		</div>
	);
};

export default Homepage;
