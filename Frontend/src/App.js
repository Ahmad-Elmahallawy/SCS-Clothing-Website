import NavBar from "./Components/NavBar";
import AllClothingLandingPage from "./Components/AllClothesPage/AllClothingLandingPage";
import HomeLandingPage from "./Components/HomePage/HomeLandingPage";
import SignUpLandingPage from "./Components/SignUpPage/SignUpLandingPage";
import Footer from "./Components/Footer";
import LogInLandingPage from "./Components/LogInPage/LogInLandingPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeLandingPage />} />
          <Route path="/Clothing" element={<AllClothingLandingPage />} />
          <Route path="/Sign-Up" element={<SignUpLandingPage />} />
          <Route path="/Log-In" element={<LogInLandingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
