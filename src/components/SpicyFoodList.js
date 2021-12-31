import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisine, setCuisine] = useState("All")

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleLiClick(id){
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    // example below to remove an <li>
             // const newFoodArray = foods.filter(food => id !== food.id)
    setFoods(newFoodArray)
  }

  function handleDropDown(event){
    setCuisine(event.target.value)
  }

  const foodsToDisplay = foods.filter((food) => {
    if (cuisine === "All") {
      return true;
    } else {
      return food.cuisine === cuisine;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ))
  

  return (
    <div>
      <p><select name="filter" onChange={handleDropDown}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      </p>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
    
  );
}

export default SpicyFoodList;
