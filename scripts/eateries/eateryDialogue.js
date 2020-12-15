// previewList.js listens for a details button to be pressed and is redirected here 
// Presents additional eatery information to the user via dialogue box
import { useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")

//.close() method closes the dialogue box
eventHub.addEventListener("click", event =>{
    if(event.target.id === "closeDialog"){
        eateriesDialog.close();
    }
})

//where is eateriesDialog?
eventHub.addEventListener("eateryBtnClicked", event =>{
    const eateriesDialog = document.querySelector("eateriesDialog")
    const dialogText = document.querySelector("eateries__text")

    console.log('event al id', event.detail.clickedEatery)
    
    //matching clicked eatery on DOM to database
    const clickedEatery = useEateries().find(
        (eatery) => eatery.id === parseInt(event.detail.clickedEateryId)
    )

    //HTMl converted text for the specfic eatery that was chosen
    dialogText.innerHTML = `
        <h3> ${clickedEatery.businessName} </h3>
        <div id="wheelchair">Wheelchair accessible: ${clickedEatery.ameneties.wheelchairAccessible}</div>
        div id="petFriendly">Pet Friendly: ${clickedEatery.ameneties.petFriendly}</div>
        div id="wifi">Wifi: ${clickedEatery.ameneties.wifi}</div>
        div id="diaperFacility">Diaper Facility: ${clickedEatery.ameneties.diaperFacility}</div>
        div id="playground">Playground: ${clickedEatery.ameneties.playground}</div>
        div id="restrooms">Public Restrooms: ${clickedEatery.ameneties.restrooms}</div>
    `
    //the .showModal() method shows the dialog window
    eateriesDialog.showModal()
})

//creates the space for the dialog on the DOM note: <dialog>
export const eateryDialog = () =>{
    return ` 
        <dialog id="eateryDialog">
            <div id="eateryDialog__text></div>
            <button id="closeDialog">close</button>
        </dialog>
    `
}