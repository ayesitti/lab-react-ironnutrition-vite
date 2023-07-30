import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { Divider } from "antd";
import Search from "./components/Search";

const foods = foodsJson;

function App() {
  const [foodList, setFoodList] = useState(foodsJson);
  const [searchString, setSearchString] = useState("");

  function handleDelete(id) {
    const newFoodie = foods.filter((food) => food.id !== id);
    setFoodList(newFoodie);
  }

  function addFood(food) {
    // const copy = [...foodList];
    // copy.push(food);
    // setFoodList(copy);
    setFoodList([...foodList, food]);
  }

  function handleSearch(value) {
    setSearchString(value);
  }
  //Add a variable
  let foodToDisplay;
  if (!searchString) {
    foodToDisplay = foodList;
  } else {
    foodToDisplay = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchString.toLowerCase())
    );
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm foodie={addFood} />

      <Search searchString={searchString} handleSearch={setSearchString} />

      <Divider>Add Food Entry</Divider>
      {/* foodList.map - change to foodToDisplay.map */}
      {foodToDisplay.map((food) => {
        return (
          <FoodBox key={food.id} food={food} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default App;
