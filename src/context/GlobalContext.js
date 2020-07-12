import React from "react";
import { useState, createContext, useEffect } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
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
    <GlobalContext.Provider
      value={{
        meal,
        setMeal,
        mealDetails,
        getRandomMeal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
