import { useState } from "react";

function OrderForm({addOrder}) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  console.log(name)
  function handleSubmit(e) {
    e.preventDefault();
    const newOrder = {
      name: name,
      ingredients: ingredients
    }
    addOrder(newOrder)
    clearInputs();
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
  };

  function addIngredient(event) {
    event.preventDefault()
    setIngredients(ingredient => [...ingredient, event.target.name])
  
  }

  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        onClick={(e) => addIngredient(e)}
      >
        {ingredient}
      </button>
    );
  });
  console.log('name', name) // name prints fine but 
  console.log('ingred', ingredients) // why is it printing empty strings for ingredients 
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {ingredientButtons}

      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;
