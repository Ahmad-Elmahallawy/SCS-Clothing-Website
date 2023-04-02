import { useRef } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import "../Styles/NavBarStyle.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src="../Images/SCSLogo.png" alt="" />
      <nav ref={navRef}>
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/Clothing">All Clothing</Link>
        </a>
        <a href="/#">Contact Us</a>
        <a href="/#">About Us</a>
        <a><Link to="/Log-In">Log In</Link></a>
        <a href="/#">
          {" "}
          <FaShoppingCart style={{ marginRight: "5px" }} /> 
          
          My Cart
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
