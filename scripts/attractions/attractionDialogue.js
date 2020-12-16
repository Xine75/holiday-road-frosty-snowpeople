// previewList.js listens for a details button to be pressed and is redirected here 
// Presents additional attraction information to the user via dialogue box

import { useAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", e => {
    if(e.target.id === "closeDiaglog") {
        attractionDialog.close()
    }
})

eventHub.addEventListener("attractionClick", e => {
    const attractionDialog = document.querySelector("#attractionDialog")
    const dialogText = document.querySelector("attractionDialog__text")

    //console.log("click is listening", e.detail.attractionButton)
    const attractionDetail = useAttractions().find( (attraction) =>
    attraction.id === parseInt(e.detail.attractionButton)
    )
        dialogText.innerHTML = `
        ${attractionDetail.ameneties.map((ameneties) => `
        <h3>Sells souvenirs? ${ameneties.souvenirs}</h3>
        <h3>Restroom available? ${ameneties.restrooms}</h3>
        `).join("")} `
        attractionDialog.showModal()
})

export const attractionDialog = () => {
    return `
    <dialog id="attractionDialog">
    <div id="attractionDialog__text"></div>
    <button id="closeDialog">Close</button>
    </dialog>
    `
}

    