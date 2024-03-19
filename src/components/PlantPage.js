import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plant, setPlant] = useState([])
  const [wallE, searchPlant] = useState("")
  const [plantNewPrice, setPlantPrice] = useState(0)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(data => {
        setPlant(data)
      })
  }, [])

  function addPlant(newSubmitPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-type": "Application/JSON"
      },
      body: JSON.stringify(newSubmitPlant)
    })
      .then(r => r.json())
      .then(data => {
        const newPlant = [...plant, data]
        setPlant(newPlant)
      })
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant} setPlantPrice={setPlantPrice} plantPrice={plantNewPrice} />
      <Search searchPlant={searchPlant} />
      <PlantList plant={plant} setPlant={setPlant} wallE={wallE} plantNewPrice={plantNewPrice} setPlantPrice={setPlantPrice} />
    </main>
  );
}

export default PlantPage;
