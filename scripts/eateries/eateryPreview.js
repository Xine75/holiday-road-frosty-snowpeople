import { EateryDialog } from "./eateryDialogue.js"
import { useEateries } from "./EateryProvider.js"

const eateryElement = document.querySelector("preview__eatery")
const eventHub = document.querySelector(".container")

//event listener for details button on eatery selected 
eateryElement.innerHTML = `${EateryDialog()}`

// const render = () =>{

// }

//event listener for eatery selected
eventHub.addEventListener("eaterySelect", event =>{

    //check that eatery was selected
    if(event.detail.eateryChosen !== "0"){

        //check that event listener is listening
        console.log("eatry", event.detail)
    
        const eateries = useEateries()
        const currentEatery = eateries.find( (eatery) => eatery.id === parseInt(event.detail.eateryChosen))

        return ContentElement.innerHTML = eateryHTML(currentEatery)

    }


})