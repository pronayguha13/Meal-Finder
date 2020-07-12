import React from "react";

import "./App.css";
const Meal = ({ meals }) => {
  return (
    <div className="meal" key={meals.idMeal}>
      <img src={meals.strMealThumb} alt={meals.strMeal} />
      <div className="meal-info">
        {/* data-mealID="{meals.idMeal}" */}
        <h3>${meals.strMeal}</h3>
      </div>
    </div>
  );
};
export default Meal;
