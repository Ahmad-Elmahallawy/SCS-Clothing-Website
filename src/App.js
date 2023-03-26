import NavBar from "./Components/NavBar";
import AllClothingLandingPage from "./Components/AllClothingLandingPage";
import HomeLandingPage from './Components/HomeLandingPage'
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
      </div>
    </Router>
  );
}

export default App;
