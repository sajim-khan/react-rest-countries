//3rd (data receive for showing UI)
import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props);
  const { name, region, population, flags, capital, languages } = props.country;
  return (
    <div className="country">
      <h1>Country name: {name.common}</h1>
      {/* <h3>Region: {region}</h3>
      <h4>Population: {population}</h4>
      <h5>Capital: {capital}</h5>
      <h5>Language: {languages}</h5> */}

      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
