import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CityContext } from "CONTEXTS/CityContext.js";
import SingleWeather from "../SingleWeather";
import API_KEY from "API_KEY";
import "./WeatherDisplayArea.css";

function WeatherDisplayArea() {
  var [cityname] = useContext(CityContext);
  var [weather, setWeather] = useState(null);

  useEffect(() => {
    //if uses select box
    axios
      .get(
        "https://api.weatherbit.io/v2.0/forecast/daily?city=" +
          cityname +
          "&country=TR&lang=TR&key=" +
          API_KEY +
          ""
      )
      .then((e) => {
        setWeather(e.data.data);
      });
  }, [cityname]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        axios
          .get(
            "https://api.weatherbit.io/v2.0/forecast/daily?&lat=" +
              lat +
              "&lon=" +
              long +
              "&country=TR&lang=TR&key=" +
              API_KEY +
              ""
          )
          .then((e) => {
            setWeather(e.data.data);
          });
      });
    }
  }, []);

  return (
    <div className="container">
      {weather &&
        weather
          .slice(0, 8)
          .map((val, indx) => <SingleWeather key={indx} weather={val} />)}
    </div>
  );
}

export default WeatherDisplayArea;
