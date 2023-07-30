import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { Divider } from "antd";
import Search from "../style-guide/Search.example";

const foods = foodsJson;

function App() {
  const [foodList, setFoodList] = useState(foodsJson);
  const [searchString, setSearchString] = useState("");

  function handleDelete(id) {
    const newFoodie = foods.filter((food) => food.id !== id);
    setFoodList(newFoodie);
  }

  function addFood(food) {
    const copy = [...foodList];
    copy.push(food);
    setFoodList(copy);
  }

  //Add a variable
  let foodToDisplay;
  if (!searchString) {
    foodToDisplay = foods;
  } else {
    foodToDisplay = foods.filter((food) => food.name.toLowerCase());
  }
  return (
    <div className="App">
      <AddFoodForm foodie={addFood} />
      <h1>LAB | React IronNutrition</h1>
      <Search searchString={searchString} handleSearch={setSearchString} />

      <Divider>Add Food Entry</Divider>
      {/* foodList.map - change to foodToDisplay.map */}
      {foodList.map((food) => {
        return (
          <FoodBox key={food.id} food={food} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default App;
