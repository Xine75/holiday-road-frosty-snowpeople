// ---IMPORTS---
// itineraryDataProvider.js
// itineraryHTMLConverter.js
// -------------

// Initializes any saved itineraries already in the API first. (Call in main.js) (May make fake itinerary entry)
// Listen for a custom event from itineraryDataProvider.js (a saveState event)
// If a save event occurs, send the new list to the DOM

// Imports
import { itineraryHTMLer } from "./itineraryHTMLConverter.js";
import { getItineraries, useItineraries } from "./itineraryDataProvider.js";

// Selectors
const itineraryLocation = document.querySelector(".savedItineraries");
const eventHub = document.querySelector(".container");

let itineraries = [];

// Displays the itineraries in the local JSON file on the DOM
export const itineraryList = () => 
    getItineraries().then(() => {
        itineraries = useItineraries()
        const itinerariesToPage = itineraries.map(itinerary =>  itineraryHTMLer(itinerary)).join("");
        itineraryLocation.innerHTML = itinerariesToPage
});

// Listen to see if the itineraries are updated; push them to the DOM if they have been
eventHub.addEventListener("itinerarySaved", () => itineraryList());

