import { useEateries } from "./eateryProvider.js"
import { eatery } from "./eateryHTML.js"
import "./eateryDialogue.js";

const eateryElement = document.querySelector(".preview__eatery")
const eventHub = document.querySelector(".container")


//event listener for eatery selected
eventHub.addEventListener("eaterySelect", event =>{

    //check that eatery was selected
    if(event.detail.eateryChosen !== "0" ){

        const eateries = useEateries()
        const currentEatery = eateries.find( (eatery) => eatery.id === parseInt(event.detail.eateryChosen))

        return eateryElement.innerHTML = eatery(currentEatery)

    }

})

