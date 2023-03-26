import NavBar from "./Components/NavBar";
import AllClothingLandingPage from "./Components/AllClothesPage/AllClothingLandingPage";
import HomeLandingPage from './Components/HomePage/HomeLandingPage'
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
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
