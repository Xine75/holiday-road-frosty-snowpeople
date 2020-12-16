import { eateryDialog } from "./eateryDialogue.js"
import { useEateries } from "./eateryProvider.js"
import { eatery } from "./eateryHTML.js"

const eateryElement = document.querySelector(".preview__eatery")
const eventHub = document.querySelector(".container")

//event listener for details button on eatery selected 
// eateryElement.innerHTML = `${eateryDialog()}`

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

        return eateryElement.innerHTML = eatery(currentEatery)

    }


})