import "../css/QuestionPage.css";
import math from "../assets/questions.json";
import { useState } from "react";

const QuestionPage = () => {
	let selectedAnswer = "";
	let sum = 0;
	const [hiddenClass, sethiddenClass] = useState("hidden");
	const [correctOrNot, setCorrectOrNot] = useState("");
	const [scoreLevel, setScoreLevel] = useState(2);
	const [showButton, setShowButton] = useState(true);
	const [randomNumber, setRandomNumber] = useState(0);
	const [questionsAnswered, setQuestionsAnswered] = useState(1);
	const [amountCorrect, setAmountCorrect] = useState(0);

	let allOptions: string = math.Math[scoreLevel][randomNumber].options;
	let question: string = math.Math[scoreLevel][randomNumber].Problem;
	let answerArray: Array<string> = allOptions.split(" , ");
	const [rationale, setRationale] = useState(
		math.Math[scoreLevel][randomNumber].Rationale
	);

	function checkAnswer() {
		sethiddenClass("shown");
		setShowButton(false);
		setRationale(math.Math[scoreLevel][randomNumber].Rationale);

		if (questionsAnswered < 10) {
			if (selectedAnswer === math.Math[scoreLevel][randomNumber].correct) {
				setAmountCorrect(amountCorrect + 1);
				setCorrectOrNot("Correct");
				sum = sum + 1;
				console.log(sum);
			} else {
				setCorrectOrNot("Wrong");
			}
			localStorage.setItem("quizSum", sum.toString());
		} else {
			window.location.href = "http://localhost:5173/quizResults";
		}
	}

	function nextQuestion() {
		setQuestionsAnswered(questionsAnswered + 1);
		setShowButton(true);
		if (correctOrNot === "Correct") {
			if (scoreLevel < 4) {
				setScoreLevel(scoreLevel + 1);
			} else {
				setScoreLevel(scoreLevel);
			}
		} else {
			if (scoreLevel > 1) {
				setScoreLevel(scoreLevel - 1);
			} else {
				setScoreLevel(scoreLevel);
			}
		}

		setRandomNumber(Math.floor(Math.random() * 5));
		allOptions = math.Math[scoreLevel][randomNumber].options;
		question = math.Math[scoreLevel][randomNumber].Problem;
		answerArray = allOptions.split(" , ");
	}

	return (
		<div className="questionCard">
			<h3>Question {questionsAnswered} of 10</h3>
			<h1 className="questionHeader">{question}</h1>
			<form>
				<div className="multipleChoiceDiv">
					<label className="multipleChoiceLabel">
						<input
							className="multipleChoice"
							type="radio"
							name="react-tips"
							value="option1"
							onChange={() => (selectedAnswer = "a")}
						/>
						{answerArray[0]}
					</label>
				</div>

				<div className="multipleChoiceDiv">
					<label className="multipleChoiceLabel">
						<input
							className="multipleChoice"
							type="radio"
							name="react-tips"
							value="option2"
							onChange={() => (selectedAnswer = "b")}
						/>
						{answerArray[1]}
					</label>
				</div>

				<div className="multipleChoiceDiv">
					<label className="multipleChoiceLabel">
						<input
							className="multipleChoice"
							type="radio"
							name="react-tips"
							value="option3"
							onChange={() => (selectedAnswer = "c")}
						/>
						{answerArray[2]}
					</label>
				</div>

				<div className="multipleChoiceDiv">
					<label className="multipleChoiceLabel">
						<input
							className="multipleChoice"
							type="radio"
							name="react-tips"
							value="option4"
							onChange={() => (selectedAnswer = "d")}
						/>
						{answerArray[3]}
					</label>
				</div>
				<div className="multipleChoiceDiv">
					<label className="multipleChoiceLabel">
						<input
							className="multipleChoice"
							type="radio"
							name="react-tips"
							value="option5"
							onChange={() => (selectedAnswer = "e")}
						/>
						{answerArray[4]}
					</label>
				</div>
			</form>
			<div className={`rationale ${hiddenClass}`} id="rationale">
				{!showButton ? correctOrNot : null} <br />
				{!showButton ? rationale : null}
			</div>
			<div>
				{showButton ? (
					<button className="sumbitButton" onClick={() => checkAnswer()}>
						Submit
					</button>
				) : null}
				{!showButton ? (
					<button className="sumbitButton" onClick={() => nextQuestion()}>
						Next Question
					</button>
				) : null}
			</div>
		</div>
	);
};
export default QuestionPage;
