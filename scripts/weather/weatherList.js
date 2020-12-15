// Handles eventListener that listens for a park to be chosen.
// When a park is chosen, send a request via weatherProvider.js to return relevant 5-day forecast
// Utilize weatherHTMLConverter.js to convert to HTML (if necessary)
// Injects HTML into the DOM (class="forecast")

// Imports
import { getWeather, useWeather } from "./weatherProvider.js";
import { weatherHTMLConverter } from "./weatherHTMLConverter.js";

// Selectors
const eventTarget = document.querySelector('.forecast');
const eventHub = document.querySelector('.container')

// Local variable used to store the weather array
// Will eventually hold 40 objects; 5 days with 8 different times per day
// Ex: 0:00:00, 3:00:00, 6:00:00, etc.
let allWeather = [];

// Takes weather for the next five days from an area (based off the zip code)
// Filters out 15:00:00 for the five days (determined that time was the best choice)
// Calls on the weatherHTMLConverter to convert the objects into HTML
// Sends the HTML to the DOM within the <section> (class="forecast")
export const weatherList = (lat, lon) => {
    getWeather(lat, lon)
    .then(() => {
        allWeather = useWeather()
        // "If the time of the current day is 15:00:00, copy it to fiveDayForecast"
        const fiveDayForecast = allWeather.filter(day => day.dt_txt.split(" ")[1] === "15:00:00")
        const weatherToPage = fiveDayForecast.map(day => weatherHTMLConverter(day)).join("")
        eventTarget.innerHTML = weatherToPage;
    })
};

// Still in development; talk with Nicholas about the shared event listener
/*
eventHub.addEventListener("nameOfEvent",(event) => {
    weatherList(event.addresses[0].postalCode.value);
})
*/