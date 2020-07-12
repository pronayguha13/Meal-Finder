import React from "react";

import "./App.css";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
const Meal = () => {
  const { mealDetails } = useContext(GlobalContext);
  return (
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
  );
};
export default Meal;
