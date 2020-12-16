// Translate JS api data into HTML(Will be sent to the List component)
// Also handles the selectors from the option dropdowns

import { getEateries, useEateries } from "./eateryProvider.js"
import { boolConvert } from "./eateryDialogue.js"


//Get a refernce to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".navbar__eatery")
const eventHub = document.querySelector(".container")

//listen for a "change" event 
eventHub.addEventListener("change", event =>{
    //guard 
    if(event.target.id === "eaterySelect"){
        //create custom event
        const customEvent = new CustomEvent("eaterySelect", {
            detail : {
                eateryChosen: event.target.value
            }
        })
        //Dispatch custom event 
        eventHub.dispatchEvent(customEvent)
    }
})


//triggering the fetching the API data and loading it into app state
export const EaterySelect = () => {
    getEateries()
        .then( () => {
            let eatery = useEateries()
            render(eatery)
        })
}

//Use interpolation here to invoke the map() method on 
//the eateryCollection to generate the option element
const render = eateryCollection => {
    
    const wheelchairAccessible = ""
    contentTarget.innerHTML = `
        <select class ="dropdown" id="eaterySelect">
            <option value="0">Please select an eatery...</option>
            ${
                eateryCollection.map( eateryObject =>
                    ${ (() => {if(eateryObject.ameneties.wheelchairAccessible){
                         wheelchairAccessible = "♿"
                    }})}
                        
                    `<option value ="${eateryObject.id}"> ${eateryObject.businessName}  ${wheelchairAccessible} }</option>`
                )
            }        
        </select>   
    `
}

 //♿ ${boolConvert(eateryObject.ameneties.wheelchairAccessible)