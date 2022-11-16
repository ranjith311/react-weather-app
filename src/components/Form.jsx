import React from "react";
import "../bootstrap.min.css";
import "../bootstrap.css";
import Weather from "./Weather";
import Error from "./Error";
import { useState } from "react";
import axios from "axios";


//form component
const Form = () => {

  //state for show and hide weather result.
  const [showResults, setShowResults] = useState(false);

  //state for show and hide error
  const [showError, setShowError] = useState(false);

  //state for weather reports
  let [weather, setWeather] = useState({
    temp: 23,
    feels_like: "",
    humidity: "",
    cloud: "",
    city_name: "",
  });

  //state for error msg
  let [errorMsg, setError] = useState("");


  //getting weather report
  const getWeather = async () => {
    const city_name = document.getElementById("city_name");

    try {
      const api_key = process.env.REACT_APP_API_KEY;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&units=metric&appid=${api_key}`;
      const res = await axios.get(url);
      console.log(res.data);

      //setting weather report to weather object
      setWeather({
        temp: res.data.main.temp,
        feels_like: res.data.main.feels_like,
        humidity: res.data.main.humidity,
        cloud: res.data.weather[0].description,
        city_name: res.data.name,
        icon: res.data.weather[0].icon,
      });

      //changing state of result and error
      setShowError(false);
      setShowResults(true);


    } catch (error) {

      //changing state of result and error
      setShowResults(false);
      setShowError(true);
      setError(`City name ${city_name.value} not available`);
    }
  };




  
  return (
    <>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="input-group mb-3 container ">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            aria-label="City"
            aria-describedby="button-addon2"
            name="city_name"
            id="city_name"
          />
          <button
            onClick={getWeather}
            className="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            Submit
          </button>
        </div>
      </div>


      {/* Showing error msg according to showError state */}
      {showError ? <Error error={errorMsg} /> : null}


      {/* Showing weather report according to weather state */}
      {showResults ? (
        <Weather
          temp={Math.floor(weather.temp)}
          feels_like={Math.floor(weather.feels_like)}
          humidity={weather.humidity}
          cloud={weather.cloud}
          city={weather.city_name}
          icon={weather.icon}
        />
      ) : null}
    </>



  );
};

export default Form;
