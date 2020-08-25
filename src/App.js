import React, { useState, useEffect } from "react";
import "./styles.css";
export default function App(){
  const[data,setData]=useState([]);
  useEffect(()=>{
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res=>res.json())
     .then(val=>setData(val))
  },[])
  return(
    <div className="App">
      {
       <h2>Countries length is:{data.length}</h2>
      }
    </div>
  );
}
