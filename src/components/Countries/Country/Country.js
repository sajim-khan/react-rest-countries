//3rd (data receive for showing UI)
import React from "react";
import "./Country.css";

const Country = (props) => {
  // console.log(props.country.languages);
  const { name, region, population, flags, capital, languages } = props.country;
  return (
    <div className="country text-bg-primary ">
      <h1>Country name: {name.common}</h1>
      <img src={flags.png} alt="" />
      <h3>Region: {region}</h3>
      <h4>Population: {population}</h4>
      <h4>Capital: {capital}</h4>
    </div>
  );
};

export default Country;
