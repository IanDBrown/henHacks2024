import "../css/App.css";
import image from "../assets/robot-image.png";

export default function Homepage() {
<<<<<<< HEAD
	return (
		<div className="container">
			<div className="title">
				<h1>Intelli Learn</h1>
			</div>
			<h1>An ethical homework helping AI!</h1>
			<div className="imageContainer">
				<img src={image} alt="Image of a green friendly robot" />
			</div>
			<button>CHOOSE A SUBJECT!</button>
		</div>
	);
}
=======
    return (
        <div className="container homepage">
            <div className="title">
                <h1>Intelli Learn</h1>
                <div className="controls">
                    <div className="subjectSelect">
                        <select>
                            <option value="0">Select a subject:</option>
                            <option value="1">Reading</option>
                            <option value="2">Math</option>
                        </select>
                    </div>
                    <button>Take a test!</button> {/* Added the button here */}
                </div>
            </div>
            <h1>An ethical homework helping AI!</h1>
            <div className="imageContainer">
                <img src={image} alt="Image of a green friendly robot" />
            </div>
        </div>
    );
}
>>>>>>> main
