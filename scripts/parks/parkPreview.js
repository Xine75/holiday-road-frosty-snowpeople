import { parkHTMLConverter } from "./parkHTMLConverter.js";
import { getParks, useParks } from "./ParkProvider.js"
import { parkSelector } from "./parkSelector.js"

getParks()
parkSelector()



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
