import React, { useState, useEffect } from "react";
import "./styles.css";
import Country from "./components/Country/Country";
import CountryDetails from "./components/CountryDetails/CountryDetails";
export default function App() {
  const [data, setData] = useState([]);
  const NewData = data.slice(0, 20);
  const [country, setCountry] = useState([]);
  const handleCountry = (data) => {
    const newCountry = [...country, data];
    setCountry(newCountry);
  };
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((val) => setData(val));
  }, []);
  return (
    <div className="App">
      {<h2>Countries length is:{NewData.length}</h2>}
      <CountryDetails country={country}></CountryDetails>
      {NewData.map((data) => (
        <Country
          country={data}
          key={data.alpha3Code}
          handleCountry={handleCountry}
        ></Country>
      ))}
    </div>
  );
}
