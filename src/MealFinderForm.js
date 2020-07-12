import React from "react";

import "./App.css";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const MealForm = () => {
  const { meal, setMeal, getRandomMeal } = useContext(GlobalContext);
  return (
    <>
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
      <div>
        {meal.trim().length ? (
          <h3>Search result for : "{meal}"</h3>
        ) : (
          <p>Search your Meal</p>
        )}
      </div>
    </>
  );
};
export default MealForm;
