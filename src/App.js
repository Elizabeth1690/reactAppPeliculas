import "./App.css";
import Home from "./components/Home.js";
import NewMovies from "./components/NewMovies";
import DescriptionMovie from "./components/DescriptionMovie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/newMovies" element={<NewMovies />} />
          <Route path="/descriptionMovie" element={<DescriptionMovie />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
