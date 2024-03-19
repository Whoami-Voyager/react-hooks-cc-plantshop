import React from "react";

function Search({ searchPlant }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => searchPlant(e.target.value)}
      />
    </div>
  );
}

export default Search;
