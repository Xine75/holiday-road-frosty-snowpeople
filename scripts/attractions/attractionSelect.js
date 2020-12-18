// Handles the selectors from the option dropdowns

//imports data for use in Selectors
import { getAttractions, useAttractions } from "./AttractionProvider.js"

//Declares eventHub variable and where it will be anchored to DOM
const eventHub = document.querySelector(".container")

//Get a reference to the DOM element whre the <select> will be rendered
const attractionTarget = document.querySelector(".navbar__attraction")

//Create a custom message via eventHub.
eventHub.addEventListener("change", e => {
    //only do this if attractionSelect element was changed
    if (e.target.id === "attractionSelect") {
        const attractionEvent = new CustomEvent("attractionChosen", {
            detail: {
                attractionSelection: e.target.value
            }
        })
        eventHub.dispatchEvent(attractionEvent)
    }

})
//Setting up attractionSelect
export const attractionSelect = () => {
    //Trigger fetching the API data adn loading it into the application state
    getAttractions()
        .then(() => {
            //Get all attractions from the application state
            const attractionsArray = useAttractions()
            render(attractionsArray)
        })
}
const render = attractionsCollection => {

    /*Use interpolation to invoke the .map() method on attractionsArray to generate
    the option elements */

    attractionTarget.innerHTML = `
<select class="dropdown" id="attractionSelect">
    <option value="0">Please select a bizarrarie...</option>
    ${attractionsCollection.map((attraction) => `<option value=${attraction.id}>${attraction.name}</option>
        `)
        }
    </select>
`}

//ONTO MAIN
//import { attractionSelect } from "./attractions/attractionSelect.js"

//adding an event listener for parkselected
eventHub.addEventListener("parkSelected", (event) => {
    //access eaterys
    const attraction = useAttractions();

    //create an array for all parks, separates each state into own location of array
    let stateArray = event.detail.parkState.split(",");

    //narrow list of the eatery
    let matchingEatery = attraction.filter((attractionObject) => stateArray.includes(attractionObject.state));
    
    //render to drop down
    render(matchingEatery);
});