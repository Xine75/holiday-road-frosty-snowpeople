import { parkDialog } from "./parkDialogue.js";
import { parkHTMLConverter } from "./parkHTMLConverter.js";
import { useParks } from "./ParkProvider.js"
import { parkSelector } from "./parkSelector.js"

parkSelector()
parkDialog()
const eventHub = document.querySelector(".container")


/* 
Rendering parks to the DOM
*/
const parkPreviewTarget = document.querySelector(".preview__park")

//eventlistener for selector to render to DOM
eventHub.addEventListener("parkSelected", customEvent => {
  
 //take parkID and use it to FIND matching park
  if ( customEvent.detail.parkID === "0"){
    
    return parkPreviewTarget.innerHTML = `
    <div>
      <h1> Please Select A Park</h1>
    <div>
    `
    }else if (customEvent.detail.parkID !== "0") {
      
    const parkArray = useParks()
    const foundPark =
    parkArray.find( parkObject => parkObject.id === customEvent.detail.parkID )
   return  parkPreviewTarget.innerHTML =` ${parkHTMLConverter(foundPark)} ${parkDialog()}`
    }
   
})
