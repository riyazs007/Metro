import React, { useContext, useState } from 'react';
import {Context} from './MetroContext';

const City = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleOnCityChange = (e) => {
    setSelectedCity(e.target.value);  
  }
  return (
    <><div className="container">
    <h1>Metro Fare</h1>
      <label>Select city:</label>
      
      <select value={selectedCity} onChange={handleOnCityChange}>
         <option value="">Select city</option>       
        <option value="Chennai">Chennai</option>
        <option value="Delhi">Delhi</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>

      <Context key1={selectedCity} />
      </div>
</>
  );
};


export default City;