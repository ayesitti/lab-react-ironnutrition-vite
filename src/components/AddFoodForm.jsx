import { Divider, Input, Button } from "antd";
import { useState } from "react";

function AddFoodForm() {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(1)
    const [servings, setServings] = useState(1)

    function handleSubmit(event) {
        event.preventDefault()
        const thatFood = {name, image, calories, servings}
        props.foodie(thatFood)

    }
  return (
    <form onSubmit={handleSubmit}>
      

      <label>Name</label>
      <Input name="name" value={name} type="text" onChange={(event) => setName(event.target.value)} />

      <label>Image</label>
      <Input name="image" value={image} type="text" onChange={(event) => setImage(event.target.value)} />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <input type="number" name="calories" value={calories} onChange={(event) => setCalories(event.target.value)} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <input type="number" name="servings" value={servings} onChange={(event) => setServings(event.target.value)} />

      <Button type="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
