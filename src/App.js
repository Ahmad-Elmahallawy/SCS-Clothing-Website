import NavBar from "./Components/NavBar";
import AllClothingLandingPage from "./Components/AllClothesPage/AllClothingLandingPage";
import HomeLandingPage from './Components/HomePage/HomeLandingPage'
import SignUpLandingPage from "./Components/SignUpPage/SignUpLandingPage";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/Home" element={<HomeLandingPage/>}/>
          <Route path="/Clothing" element={<AllClothingLandingPage />} />
          <Route path="/Sign-Up" element={<SignUpLandingPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
