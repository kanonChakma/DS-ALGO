import React, { useState, useEffect } from "react";
import "./styles.css";
import Country from "./components/Country/Country";
export default function App() {
  const [data, setData] = useState([]);
  const NewData = data.slice(0, 20);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((val) => setData(val));
  }, []);
  return (
    <div className="App">
      {<h2>Countries length is:{NewData.length}</h2>}
      {NewData.map((data) => (
        <Country country={data} key={data.alpha3code}></Country>
      ))}
    </div>
  );
}
