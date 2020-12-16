// IMPORTS: itineraryForm.js
// Stores saved itineraries from the local itineraries API.
// When the API state changes, send off a custom event that itineraryList.js will pick up to render the new list of itineraries.

// Selectors
const eventHub = document.querySelector(".container");

// Local container of notes
let itineraries = [];

const dispatchStateChangeEvent = () => {
    const itineraryChangeEvent = new CustomEvent("itinerarySaved");

    eventHub.dispatchEvent(itineraryChangeEvent);
};

export const getItineraries = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        .then(parsedItineraries => itineraries = parsedItineraries);
};

export const useItineraries = () => itineraries.slice();

export const saveItinerary = itinerary => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
    .then(getItineraries)
    .then(dispatchStateChangeEvent);
};