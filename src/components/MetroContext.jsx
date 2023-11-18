import React, { createContext } from 'react'
const MyContext = createContext();
import { PlacesList } from './Locations';
import Fare from './FareComp';

const Context = (props) => {
  const city = props.key1;
return(

    <MyContext.Provider value={city}>
        <PlacesList />
        <Fare />
    </MyContext.Provider>
)

}
export {Context , MyContext};
  