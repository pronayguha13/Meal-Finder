import React from "react";

import "./App.css";

const MealForm = ({ getRandomMeal, setMeal }) => {
  return (
    <div className="flex">
      <form className="flex" id="submit">
        <input
          type="text"
          onChange={(e) => setMeal(e.target.value)}
          placeholder="Search for meals or keywords"
        />
        <button className="search-btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <button className="random-btn" onClick={getRandomMeal}>
        <i className="fas fa-random"></i>
      </button>
    </div>
  );
};
export default MealForm;
