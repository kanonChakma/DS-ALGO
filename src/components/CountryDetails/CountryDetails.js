import React from "react";
import "./CountryDetails.css";
const CountryDetails = (props) => {
  const result = props.country;
  const population = result.reduce((sum, item) => sum + item.population, 0);
  return (
    <div className="">
      <h2>Country added:{result.length}</h2>
      <p>Total population added:{population}</p>
    </div>
  );
};
export default CountryDetails;
