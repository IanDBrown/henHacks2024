import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import NavBar from "./NavBar";
import HWHelperPage from "./HWHelperPage";

function App() {
  return (
    
	<BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/homework-helper" element={<HWHelperPage />} />{" "}
        {}
        {}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
