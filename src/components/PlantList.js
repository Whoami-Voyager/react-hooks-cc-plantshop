import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plant, setPlant, wallE }) {

  const foundPlant = plant.filter((plants) => {
    return plants.name.toLowerCase().includes(wallE.toLowerCase())
  })

  function deletePlant(id) {
    const url = `http://localhost:6001/plants/${id}`;
    fetch(url, {
      method: "DELETE"
    })
    const updatedPlant = foundPlant.filter(plant => plant.id !== id);
    setPlant(updatedPlant);
  }

  function plantPrice(pricePlant, id) {
    const url = `http://localhost:6001/plants/${id}`
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pricePlant)
    })
    setNewPrice()
  }

  const Eva = foundPlant.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} deletePlant={deletePlant} plantPrice={plantPrice} />
  })

  return (
    <ul className="cards">{Eva}</ul>
  );
}

export default PlantList;
