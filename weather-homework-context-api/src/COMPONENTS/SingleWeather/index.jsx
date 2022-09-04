import "./SingleWeather.css";

function SingleWeather({ weather }) {
  return (
    <div className="weather-container">
      <div className="weather-title">
        {new Date(weather.datetime).toLocaleDateString("tr-TR", {
          weekday: "long",
        })}
      </div>
      <img
        className="weather-img"
        alt="img"
        src={"WEATHER_ICONS/" + weather.weather.icon + ".png"}
      />
      <div className="weather-desp">
        {weather.weather.description}
        <br />
        {weather.app_max_temp} ~ {weather.app_min_temp}
      </div>
    </div>
  );
}

export default SingleWeather;
