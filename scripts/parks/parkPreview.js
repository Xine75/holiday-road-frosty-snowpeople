import { parkHTMLConverter } from "./parkHTMLConverter.js";
import { getParks, useParks } from "./ParkProvider.js"
import { parkSelector } from "./parkSelector.js"

getParks()
parkSelector()

const eventHub = document.querySelector(".container")


/* 
Rendering parks to the DOM
*/
const parkPreviewTarget = document.querySelector(".preview__park")

// const renderPark = () => {
//     getParks().then(() => 
//      parkPreviewTarget.innerHTML = `${useParks().map((parkObject) => parkHTMLConverter(parkObject)).join("")}
//     `
//    )
//     return parkPreviewTarget
// }; 
//   renderPark()
//filter down parks

// const findPark = () => {
//  useParks().find(parkObject.id === parkSelected){ 
//    return parkHTMLConverter(parkObject)
//  }
//   }

  
//eventlistener for selector to render to DOM
eventHub.addEventListener("parkSelected", customEvent => {
  
 //take parkID and use it to FIND matching park
  if (customEvent.detail.parkID !== "0" ){
    const parkArray = useParks()
    const foundPark =
      parkArray.find( parkObject => parkObject.id === customEvent.detail.parkID )
    return parkPreviewTarget.innerHTML = parkHTMLConverter(foundPark)
    }
})
