import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import NavBar from "./NavBar";
import HWHelperPage from "./HWHelperPage";
import QuestionPage from "./QuestionPage";
import QuizEndScreen from "./quizEndScreen";

function App() {
	return (
		<BrowserRouter>
			<NavBar />{" "}
			{/* NavBar is included here to ensure it's displayed on all pages */}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/homework-helper" element={<HWHelperPage />} />
				<Route path="/quiz" element={<QuestionPage />} />
				<Route path="/quizResults" element={<QuizEndScreen />} />
				{}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
