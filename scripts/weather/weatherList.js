// IMPORTS weatherHTMLConverter.js & weatherProvider.js
// Handles eventListener that listens for a park to be chosen.
// When a park is chosen, send a request via weatherProvider.js to return relevant 5-day forecast
// Utilize weatherHTMLConverter.js to convert to HTML (if necessary)
// Injects HTML into the DOM (class="forecast")

// Imports
import { getWeather } from "./weatherProvider.js";

export const weatherList = () => getWeather();