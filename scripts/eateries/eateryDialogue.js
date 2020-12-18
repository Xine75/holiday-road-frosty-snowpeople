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

//change bool to yes or no
export const boolConvert = (bool) =>{
    if(bool === true){
        return "Yes"
    }else{
        return "No"
    }
}
//HTMl converted text for the specfic eatery that was chosen
//creates the space for the dialog on the DOM note: <dialog>
export const eateryDialog = (clickedEatery) =>{
    return ` 
        <dialog id="eateryDialog">
            <div id="eateryDialog__text">
            <h2> ${clickedEatery.businessName} </h2>
            <div id="wheelchair">♿WheelChair: ${boolConvert(clickedEatery.ameneties.wheelchairAccessible)}</div>
            <div id="petFriendly">🐕Pet Friendly: ${boolConvert(clickedEatery.ameneties.petFriendly)}</div>
            <div id="wifi">📶Wifi: ${boolConvert(clickedEatery.ameneties.wifi)}</div>
            <div id="diaperFacility">👶Diaper Facility: ${boolConvert(clickedEatery.ameneties.diaperFacility)}</div>
            <div id="playground">🧒 👧Playground: ${boolConvert(clickedEatery.ameneties.playground)}</div>
            <div id="restrooms">🚻Public Restrooms: ${boolConvert(clickedEatery.ameneties.restrooms)}</div>
            </div>
            <button id="closeDialog">close</button>
        </dialog>
    `
}




