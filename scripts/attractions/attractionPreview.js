import { getAttractions, useAttractions } from "./AttractionProvider.js"
import { attractionHTML } from "./attractionHTMLConverter.js"
import { } from "./attractionDialogue.js"

const eventHub = document.querySelector(".container")
const attractionPreviewTarget = document.querySelector(".preview__attraction")

//name in quotes must be the name of the custom event declared in attractionSelect
//I had to do the getAttractions because otherwise useAttractions() was returning
//an empty array!
//Anyway this eventListener is listening for a change event from attractionSelect...
eventHub.addEventListener("attractionChosen", e => {
    getAttractions().then(() => {
    
    
    //this name must be same given to detail in attractionSelect
    ///...capturing the id number fired from attractionSelect, making sure it's not 0...
    if(e.detail.attractionSelection !== "0") {
    
    //...accessing the attractions array made available by getAttractions...
     const attractions = useAttractions()
     
    //...sorting through the array to find the attraction with the correct id...
     const attractionPicked = attractions.find( (attraction) => 
     attraction.id === parseInt(e.detail.attractionSelection) )
    //...and populating the DOM by running the pickedAttraction thru HTML.
    return attractionPreviewTarget.innerHTML = attractionHTML(attractionPicked)
    }
})
})

//Event Listener/Dispatch for "Details" click event
eventHub.addEventListener("click", e => {

    if(e.target.id.startsWith("attraction--")) {
        
        let[tag, id] = e.target.id.split("--")

        const attractionDetailClick = new CustomEvent ("attractionClick", {
            detail: {
                attractionButton: id
            }
        })
        eventHub.dispatchEvent(attractionDetailClick)
    }
})
