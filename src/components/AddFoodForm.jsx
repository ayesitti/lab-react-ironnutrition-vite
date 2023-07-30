import { Divider, Input, Button } from "antd";
import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
      id: crypto.randomUUID(),
    };
    console.log(newFood);
    props.foodie(newFood);
    // maybe reset the form fields after submission??
    setName("");
    setImage("");
    setCalories(1);
    setServings(1);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Divider> Add Food Here </Divider>
      <label>Name</label>
      <Input
        name="name"
        value={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
      />

      <label>Image</label>
      <Input
        name="image"
        value={image}
        type="text"
        onChange={(event) => setImage(event.target.value)}
      />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <input
        type="number"
        name="calories"
        value={calories}
        onChange={(event) => setCalories(event.target.value)}
      />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <input
        type="number"
        name="servings"
        value={servings}
        onChange={(event) => setServings(event.target.value)}
      />

      <button>Create</button>
    </form>
  );
}

export default AddFoodForm;
