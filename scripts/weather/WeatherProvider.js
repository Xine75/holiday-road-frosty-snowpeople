// Fetches specified API data for a city and converts to JS-readable object .json()
// Imports
import { settings } from "../settings.js";

// Local variable that stores the returned value from getWeather() and is copied by useWeather()
let weather = [];

// Stores a copy of the weather API key
const weatherKey = settings.weatherKey;

// city, state and country are the arguments to be passed into a fetch request to the weather API
export const getWeather = zip => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${zip},us&appid=${weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            console.log(parsedWeather)
            weather = parsedWeather.list
        })
};

// Returns a copy of the weather array
export const useWeather = () => weather.slice();