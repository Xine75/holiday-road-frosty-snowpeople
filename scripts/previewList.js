import { parkHTMLConverter } from "./parks/parkHTMLConverter.js";
import { getParks, useParks } from "./parks/ParkProvider.js"
import { parkSelector } from "./parks/parkSelector.js"

getParks()
parkSelector()
/* 
    ------IMPORTS------
    All HTML converter components (except weather) - These also include selector components
    All provider components (except weather)
    All dialogue components (previewList will listen for detail button clicked)
    
*/


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
