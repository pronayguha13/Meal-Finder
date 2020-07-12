import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Meal from "./Meals";
import MealForm from "./MealFinderForm";

function App() {
  const [meal, setMeal] = useState("");
  const [mealDetails, setMealDetails] = useState([]);

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
        .then((data) => setMealDetails(data.meals));
    }
  };

  const getRandomMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setMealDetails(data.meals));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Meal Finder</h1>
        <MealForm getRandomMeal={getRandomMeal} setMeal={setMeal} />

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
            mealDetails.map((meals) => <Meal meals={meals} />)
          )}
        </div>
        <div id="single-meal"></div>
      </div>
    </div>
  );
}

export default App;
