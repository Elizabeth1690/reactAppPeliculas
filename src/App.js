import "./App.css";
import Home from "./components/Home.js";
import NewMovies from "./components/NewMovies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/newMovies" element={<NewMovies />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
