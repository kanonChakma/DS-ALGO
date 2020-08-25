import React from "react";
import "./Country.css";
const Country = (props) => {
  const { name, capital, flag, area } = props.country;
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
      </div>
    </div>
  );
};
export default Country;
