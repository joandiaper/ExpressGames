import React, { useState } from 'react';

function PPTLSForm(props) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    result: props.result
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    var res = formData.result;

    if (res === 0){
        res = "Draw";
    } else if (res === 1){
        res = "Win";
    } else {
        res = "Lose";
    }
    //var res = props.result;
    const formDataWithCurrentDateTime = {
      ...formData,
      date: currentDate,
      time: currentTime,
      result: res
    };
    fetch('http://localhost:3000/pptls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formDataWithCurrentDateTime)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      document.getElementById("submit").disabled = true;
  };
  

  return (
    <form id="pptls-form" onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name:</label>
      <input type="text" id="name-input" name="name" value={formData.name} onChange={handleInputChange} /><br />

      {/* <label htmlFor="result-input">Result:</label>
      <input type="text" id="result-input" name="result" value={formData.res} onChange={handleInputChange} /><br /> */}

      <button className='rounded' id='submit' type="submit">Submit</button>
    </form>
  );
}

export default PPTLSForm;
