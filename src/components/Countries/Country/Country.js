//3rd (data receive for showing UI)
import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
      <div className='country'>
        <h2>Country Name: {props.name}</h2>
        <h3>Area: {props.area}</h3>
        <h4>Population: {props.population}</h4>
      </div>
    );
};

export default Country;
