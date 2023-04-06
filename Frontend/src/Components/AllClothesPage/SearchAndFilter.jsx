import { useState } from "react";
import { FaSearch, FaSort } from "react-icons/fa";
import "../../Styles/AllClothesPageStyles/SearchAndFilterStyle.css";

const SearchAndFilter = () => {
  const [searchValue, setSearchValue] = useState();
  return (
    <div className="Search-Filter-Container">
      <div>
        <h2>Have a specific product in mind?</h2>
      </div>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search for Hoodier, sweaters..."
          value={searchValue}
        />
        <FaSearch color="rgb(112,0,0)" className="searchIcon" />
      </div>
      <div class="dropdown">
        <button>
          <FaSort color="rgb(112,0,0)" />
          <p>Sort By</p>
        </button>
        <div class="dropdown-content">
          <a>Default</a>
          <a>Lowest Price</a>
          <a>Highest Price</a>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
