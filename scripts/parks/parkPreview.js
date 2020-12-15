import { parkHTMLConverter } from "./parkHTMLConverter.js";
import { getParks, useParks } from "./ParkProvider.js"
import { parkSelector } from "./parkSelector.js"

getParks()
parkSelector()

// const eventHub = document.querySelector(".container")


/* 
Rendering parks to the DOM
*/
const parkPreviewTarget = document.querySelector(".preview__park")

const renderPark = () => {
    getParks().then(() => 
     parkPreviewTarget.innerHTML = `${useParks().map((parkObject) => parkHTMLConverter(parkObject)).join("")}
    `
   )
    return parkPreviewTarget
}; 
  renderPark()
//eventlistener for selector to render to DOM
// eventHub.addEventListener("parkSelected", customEvent => {
//   const parkSelected = customEvent.detail.parkID
   
  
// })