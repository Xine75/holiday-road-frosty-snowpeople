// Fetches specified API data for a city and converts to JS-readable object .json()
// Imports
import { settings } from "../settings.js";

// Saves the weather API key into a local variable
const weatherKey = settings.weatherKey;

let weather = [];

// city, state and country are the arguments to be passed into a fetch request to the weather API
export const getWeather = (city, state, country) => {
    return fetch(`api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&mode=json&appid=${weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => weather = parsedWeather);
};

export const useWitnesses = () => weather.slice();