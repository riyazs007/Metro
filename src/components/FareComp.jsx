import React from 'react'
import { selectArea } from './Locations';
import { MyContext } from './MetroContext';
import { useContext } from 'react';

const Fare = (props) => {
  const {from,to}=props;  
  const CityName=useContext(MyContext); 
  const area = selectArea(CityName);
  
  let fromIndex = area.indexOf(from);
  let toIndex = area.indexOf(to);
  let diff = fromIndex - toIndex;
  let fare = Math.abs(diff*25); 
 
  return (
    <>{(fare>0)?<p>Fare: {fare}</p>:<p></p>}</>
  )
}

export default Fare;