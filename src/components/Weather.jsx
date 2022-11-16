import React from "react";


//Weather component
const Weather = (props) => {
    //weather icon link
    const imgLink = `http://openweathermap.org/img/w/${props.icon}.png`;

  return (
    <>
      <div className="container">
        <div className="card border-secondary mb-3">
          <div className="card-body"> {props.cloud} </div>
          <div className="card-body">
            <h3 className="card-title">{props.city}</h3>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">Temperature </h5>

              <span className="display-1">{props.temp}℃</span>
            </div>
            <div className="d-flex justify-content-end">
              <img src={imgLink} alt="weather_icon"></img>
            </div>
            <p className="card-text">Feels Like {props.feels_like} ℃</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
