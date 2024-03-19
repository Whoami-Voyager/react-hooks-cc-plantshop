import React, { useState } from "react";

function PlantCard({ plant, deletePlant, plantPrice }) {
  const [inventory, setInventory] = useState(true)
  const [newPrice, setNewPrice] = useState(0)
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inventory ? (
        <button className="primary" onClick={() => setInventory(!inventory)}>In Stock</button>
      ) : (
        <button onClick={() => setInventory(!inventory)}>Out of Stock</button>
      )}
      <button onClick={() => deletePlant(plant.id)}>X</button>
      <form onSubmit={() => {
        const newestPrice = {
          price: newPrice
        }
        plantPrice(newestPrice, plant.id)
        console.log(plant.id)
      }}>
        <input placeholder="Update Price" onChange={(e) => setNewPrice(e.target.value)} />
      </form>
    </li>
  );
}

export default PlantCard;
