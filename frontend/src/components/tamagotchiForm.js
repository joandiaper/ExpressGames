import React, { useState } from 'react';

function TamagotchiForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    hunger: props.hunger,
    happiness: props.happiness,
    health: props.health,
    years: props.age,
    months: props.months
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/tamagotchi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      document.getElementById("submit").disabled = true;
  };
  
  return (
    <form id="tamagotchi-form" onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name:</label>
      <input type="text" id="name-input" name="name" value={formData.name} onChange={handleInputChange} /><br />

      {/* <label htmlFor="hunger-input">Hunger:</label>
      <input type="number" id="hunger-input" name="hunger" value={formData.hunger} onChange={handleInputChange} /><br />

      <label htmlFor="happiness-input">Happiness:</label>
      <input type="number" id="happiness-input" name="happiness" value={formData.happiness} onChange={handleInputChange} /><br />

      <label htmlFor="health-input">Health:</label>
      <input type="number" id="health-input" name="health" value={formData.health} onChange={handleInputChange} /><br />

      <label htmlFor="years-input">Years:</label>
      <input type="number" id="years-input" name="years" value={formData.years} onChange={handleInputChange} /><br />

      <label htmlFor="months-input">Months:</label>
      <input type="number" id="months-input" name="months" value={formData.months} onChange={handleInputChange} /><br /> */}

      <button className='rounded' id='submit' type="submit">Submit</button>
    </form>
  );
}

export default TamagotchiForm;
