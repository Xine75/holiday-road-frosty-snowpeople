// Imports
import { settings } from "../setting.js";

// Local variable that stores the returned value from getWeather() and is copied by useWeather()
let weather = [];

// Stores a copy of the weather API key
const weatherKey = settings.weatherKey;

// city, state and country are the arguments to be passed into a fetch request to the weather API
export const getWeather = (lat,lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => weather = parsedWeather.daily)
};

// Returns a copy of the weather array
export const useWeather = () => weather.slice();