import React, { useState } from 'react';

const LocationSelectComponent = ({ lists, onSelectionChange }) => {
  const [selectedName, setSelectedName] = useState('');

  const handleResult = (event) => {
    setSelectedName(event.target.value);
    onSelectionChange(event.target.value);
  };

  return (
    <div className="container">   
        <select onChange={handleResult}>
          <option value=''>select Location</option>
          {
            lists.map((list,index)=>{
              return <option key={index} value={list}>{list}</option>
            })
          }
        </select>
    </div>
  );
};

export default LocationSelectComponent