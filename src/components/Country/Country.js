import React from "react";
import "./Country.css";
const Country = (props) => {
  const { name, capital, flag, area, population } = props.country;
  return (
    <div className="country">
      <img src={flag} alt="" />
      <div className="country-info">
        <p>
          <small>Country Name:</small>
          {name}
        </p>
        <p>
          <small>Capital:</small>
          {capital}
        </p>
        <p>
          <small>Area:</small>
          {area}
        </p>
        <p>
          <small>Population:{population}</small>
        </p>
      </div>
      <button onClick={() => props.handleCountry(props.country)}>
        Add Countries
      </button>
    </div>
  );
};
export default Country;
