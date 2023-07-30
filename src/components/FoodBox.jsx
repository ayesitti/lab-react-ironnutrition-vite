import React from "react";

function FoodBox(props) {
  const { name, calories, image, servings } = props.food;
  const totalCalories = servings * calories;
  return (
    <div>
      <p>{name}</p>

      <img src={image} alt={name} style={{ width: "150px" }} />

      <p>Calories: {calories}</p>
      <p>Servings{servings}</p>

      <p>
        <b>Total Calories: {totalCalories}kcal </b>
      </p>

      <button onClick={() => props.handleDelete(props.food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
