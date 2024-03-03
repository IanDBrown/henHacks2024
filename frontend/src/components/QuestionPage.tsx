<<<<<<< HEAD
import "../css/questions.module.css"
=======
>>>>>>> ed956d3f379fb13f267d119dbed2633f69026722
import math from "../assets/questions.json";
import { useState } from "react";

const QuestionPage = () => {
	let selectedAnswer = "";
	const [hiddenClass, sethiddenClass] = useState("hidden");
	const [correctOrNot, setCorrectOrNot] = useState("");
	const [scoreLevel, setScoreLevel] = useState(2);
	const [showButton, setShowButton] = useState(true);
	const [randomNumber, setRandomNumber] = useState(0);
	const [questionsAnswered, setQuestionsAnswered] = useState(1);
	const [amountCorrect, setAmountCorrect] = useState(0);

	let allOptions = math.Math[scoreLevel][randomNumber].options;
	let question = math.Math[scoreLevel][randomNumber].Problem;
	let answerArray = allOptions.split(" , ");
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
			} else {
				setCorrectOrNot("Wrong");
			}
		} else {
			localStorage.setItem('score', JSON.stringify(amountCorrect));
			localStorage.setItem('level', JSON.stringify(scoreLevel));
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
		<div className={questions_css.questionCard}>
			<h3>Question {questionsAnswered} of 10</h3>
			<h1 className={questions_css.questionHeader}>{question}</h1>
			<form>
				{answerArray.map((answer, index) => (
					<div className={questions_css.multipleChoiceDiv} key={index}>
						<label className={questions_css.multipleChoiceLabel}>
							<input
								className={questions_css.multipleChoice}
								type="radio"
								name="react-tips"
								value={`option${index + 1}`}
								onChange={() =>
									(selectedAnswer = String.fromCharCode(97 + index))
								}
							/>
							{answer}
						</label>
					</div>
				))}
			</form>
			<div className={`rationale ${hiddenClass}`} id="rationale">
				{!showButton ? correctOrNot : null} <br />
				{!showButton ? rationale : null}
			</div>
			<div>
				{showButton ? (
					<button
						className={questions_css.sumbitButton}
						onClick={() => checkAnswer()}
					>
						Submit
					</button>
				) : null}
				{!showButton ? (
					<button
						className={questions_css.sumbitButton}
						onClick={() => nextQuestion()}
					>
						Next Question
					</button>
				) : null}
			</div>
		</div>
	);
};

export default QuestionPage;
