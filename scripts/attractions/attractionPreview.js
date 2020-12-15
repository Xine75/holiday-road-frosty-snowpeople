import { getAttractions, useAttractions } from "./AttractionProvider.js"
import { attractionObj } from "./attractionHTMLConverter.js"
import { attractionSelect } from "./attractionSelect.js"
import { } from "./attractionDialogue.js"



const eventHub = document.querySelector(".container")
const attractionPreviewTarget = document.querySelector(".preview__attraction")


//name in quotes must be the name of the custom event declared in attractionSelect
eventHub.addEventListener("attractionChosen", e => {
    //this name must be same given to detail in attractionSelect
    if(e.detail.attractionSelection !== "0") {

        //checking to see what the e.detail contained (id number of attraction)
     console.log("attraction", e.detail)
     
     //Access the array of attractions
     const attractionsArray = useAttractions()

     const attraction = attractionsArray.find( (attraction) => attraction.id === parseInt(e.detail.attractionSelection))
     
    }
})






// const renderPark = () => {
//     getParks().then(() => 
//      parkPreviewTarget.innerHTML = `${useParks().map((parkObject) => parkHTMLConverter(parkObject)).join("")}
//     `
//    )
//     return parkPreviewTarget
// }; 
//   renderPark()