import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() { 

  const [countries, setCountry] = useState([]);
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountry(data));
    
  } , [])
  
  return (
    <div>
      <h1>Visiting Every Country of the world</h1>
      <h3>Available Countries: {countries.length}</h3>
      {countries.map((country) => (
        <Country
          name={country.name.common}
          population={country.population}
        ></Country>
      ))}
    </div>
  );
}

function Country(props){
console.log(props);
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Population: {props.population}</h4>
      
    </div>
  );
}

export default App;

