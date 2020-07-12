import React from "react";
import "./App.css";
import Meal from "./Meals";
import MealForm from "./MealFinderForm";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="container">
          <h1>Meal Finder</h1>
          <MealForm />
          <Meal />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
