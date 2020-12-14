// IMPORTS weatherHTMLConverter.js & weatherProvider.js
// Handles eventListener that listens for a park to be chosen.
// When a park is chosen, send a request via weatherProvider.js to return relevant 5-day forecast
// Utilize weatherHTMLConverter.js to convert to HTML (if necessary)
// Injects HTML into the DOM (class="forecast")

// Imports
import { getWeather, useWeather } from "./weatherProvider.js";

// Selectors
const eventTarget = document.querySelector('.forecast');

let fiveDayForecast = [];

export const weatherList = (zip) => {
    getWeather(zip)
    .then(() => fiveDayForecast = useWeather())
    .then(() => console.table(fiveDayForecast))
};