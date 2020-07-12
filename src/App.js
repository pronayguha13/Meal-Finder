import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [meal, setMeal] = useState("");
  const [mealDetails, setMealDetails] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, SetError] = useState(null);

  useEffect(() => {
    getMeal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meal]);

  const getMeal = () => {
    const term = meal.trim();
    console.log("getMeal -> term", term);
    if (term.length) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data) => setMealDetails(data.meals))
        .catch((err) => SetError(err));
    }
  };

  const getRandomMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setMealDetails(data.meals))
      .catch((err) => SetError(err));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Meal Finder</h1>
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
        <div id="meals" className="meals">
          {mealDetails === null ? (
            <h3>No meal Found</h3>
          ) : (
            mealDetails.map((meals) => (
              <div className="meal" key={meals.idMeal}>
                <img src={meals.strMealThumb} alt={meals.strMeal} />
                <div className="meal-info">
                  {/* data-mealID="{meals.idMeal}" */}
                  <h3>${meals.strMeal}</h3>
                </div>
              </div>
            ))
          )}
        </div>
        <div id="single-meal"></div>
      </div>
    </div>
  );
}

export default App;
