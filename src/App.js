import Main from "./components/Main";
import More from "./components/More";
import axios from 'axios';
import { useEffect, useState } from "react";


function App() {
  const BASE_WEATHER_URL = `http://api.weatherapi.com/v1/current.json?`
  const BASE_FORECAST_URL = `http://api.weatherapi.com/v1/forecast.json?`

  const [err, setErr] = useState('')
  const [weather, setWeather] = useState('')
  const [forecast, setForecast] = useState('')

  useEffect(() => {
    const getWeather = () => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (posn, error) => {
          if (error) {
            setErr(error);
            alert(err);
            return;
          }
          const latitude = posn.coords.latitude;
          const longitude = posn.coords.longitude;
          const weatherData = await axios.get(`${BASE_WEATHER_URL}key=${process.env.REACT_APP_WEATHER_AUTH_KEY}&q=${latitude},${longitude}&alerts=yes`);

          const forecastData = await axios.get(`${BASE_FORECAST_URL}key=${process.env.REACT_APP_WEATHER_AUTH_KEY}&q=${latitude},${longitude}&alerts=yes&days=7`);

          if (weatherData.status === 200 && weatherData.statusText === "OK") {
            setWeather(weatherData.data);
          }
          if (forecastData.status === 200 && forecastData.statusText === "OK") {
            setForecast(forecastData.data)
          }

        })
      } else {
        alert("Geolocation is not supported")
      }

      // console.log(data.data)
    }
    getWeather();
  }, [])

  return (
    <>
      <div className="z">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1">
            <Main
              location={weather.location || {}}
              current={weather.current || {}}
            />

          </div>
          <div className="col-span-2">
            <More
              current={weather.current}
              forecast={forecast.forecast}
            />

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
