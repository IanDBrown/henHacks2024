import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import QuestionPage from "./QuestionPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/quiz" element={<QuestionPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
