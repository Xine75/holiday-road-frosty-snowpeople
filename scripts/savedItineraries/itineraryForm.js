// Handles the user-input itinerary name & save itinerary button in the previewList
// Imports
import { saveItinerary } from "./itineraryDataProvider.js";

// Selectors
// --In order--
// (Main)
// (Save Itineraries button at the bottom of the itinerary preview)
// (Text input field for the itinerary name)
const eventHub = document.querySelector(".container");
const saveButton = document.getElementById("saveItinerary");
const nameField = document.getElementById("itineraryName");


// These variables will hold the last related selected option 
// e.g. parkId will hold the ID of the last park object selected
let parkId = "";
let attractionId = "";
let eateryId = "";
let name = "";

// Listens for a dispatch event when a park is selected from the dropdown options and pulls in the id from the payload
eventHub.addEventListener("parkSelected", event => {
    parkId = event.detail.parkID;
    checkSaveButton();
});


// Listens for a dispatch event when an attraction is selected from the dropdown options and pulls in the id from the payload
eventHub.addEventListener("attractionChosen", event => {
    attractionId = event.detail.attractionSelection;
    checkSaveButton();
});


// Listens for a dispatch event when an eatery is selected from the dropdown options and pulls in the id from the payload
eventHub.addEventListener("eaterySelect", event => {
    eateryId = event.detail.eateryChosen;
    checkSaveButton();
});


// Listens for user to type a name into the itinerary name field
nameField.addEventListener("input", () => {
    name = nameField.value
    checkSaveButton();
});


// Handles the events that take place when a user saves their selected itinerary (park / attraction / eatery / itinerary name)
saveButton.addEventListener("click", ()=> {
    // Prepare the new itinerary to be sent to the JSON file
    const newItinerary = {
        name: name,
        parkId: parkId,
        attractionId: attractionId,
        eateryId: eateryId
    };
    
    // Tell the JSON file that a new itinerary needs to be saved to it.
    saveItinerary(newItinerary);
});


// Check to see if each dropdown has a value chosen and if there is a name in the 
const checkSaveButton = () =>{
    if(parkId !== "" & attractionId !== "" & eateryId !== "" & name.length > 0){
        saveButton.disabled = false;
    };
};