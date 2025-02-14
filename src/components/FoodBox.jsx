import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox({ food, handleDelete }) {
  // const { name, calories, image, servings } = props.food;
  // const totalCalories = servings * calories;
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} alt="food" height={60} />

        <p>Calories: {food.calories}</p>
        <p>Servings{food.servings}</p>

        <p>
          <b>Total Calories: {food.calories * food.servings}</b> kcal
        </p>

        <Button onClick={() => handleDelete(food.id)}>Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
