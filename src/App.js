import "./App.css";
import Home from "./components/Home.js";
import NewMovies from "./components/NewMovies";
import DescriptionMovie from "./components/DescriptionMovie";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/newMovies" element={<NewMovies />} />
          <Route path="/descriptionMovie" element={<DescriptionMovie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
