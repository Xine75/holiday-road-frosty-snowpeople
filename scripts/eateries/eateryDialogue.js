// previewList.js listens for a details button to be pressed and is redirected here 
// Presents additional eatery information to the user via dialogue box
import { useEateries } from "./eateryProvider.js"

const eventHub = document.querySelector(".container")
//.close() method closes the dialogue box
eventHub.addEventListener("click", event =>{
    if(event.target.id === "closeDialog"){
        
        const dialog = document.querySelector("#eateryDialog") 
        dialog.close();
    }
})

//where is eateriesDialog?
eventHub.addEventListener("eateryBtnClicked", event =>{
    const dialogContainer = document.querySelector(".dialogContainer")
    
    //matching clicked eatery on DOM to database
    const clickedEatery = useEateries().find(
        (eatery) => eatery.id === parseInt(event.detail.clickedEateryId)
        )
        
        dialogContainer.innerHTML = eateryDialog(clickedEatery)
        const dialog = document.querySelector("#eateryDialog") 
        //the .showModal() method shows the dialog window
        dialog.showModal()
})

//HTMl converted text for the specfic eatery that was chosen
//creates the space for the dialog on the DOM note: <dialog>
export const eateryDialog = (clickedEatery) =>{
    return ` 
        <dialog id="eateryDialog">
            <div id="eateryDialog__text">
            <h3> ${clickedEatery.businessName} </h3>
            <div id="wheelchair">Wheelchair accessible: ${clickedEatery.ameneties.wheelchairAccessible}</div>
            <div id="petFriendly">Pet Friendly: ${clickedEatery.ameneties.petFriendly}</div>
            <div id="wifi">Wifi: ${clickedEatery.ameneties.wifi}</div>
            <div id="diaperFacility">Diaper Facility: ${clickedEatery.ameneties.diaperFacility}</div>
            <div id="playground">Playground: ${clickedEatery.ameneties.playground}</div>
            <div id="restrooms">Public Restrooms: ${clickedEatery.ameneties.restrooms}</div>
            </div>
            <button id="closeDialog">close</button>
        </dialog>
    `
}