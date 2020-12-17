// previewList.js listens for a details button to be pressed and is redirected here 
// Presents additional park information to the user via dialogue box

import { useParks } from "./ParkProvider.js";

// hub for listening for details button
const eventHub = document.querySelector(".container")


const dialogClose = document.querySelector(".container")

dialogClose.addEventListener("click", event =>{
  if (event.target.id === "closeDialog__park"){
    const dialog = document.querySelector("#parkDialog")
    return dialog.close()
  }
})

eventHub.addEventListener("parkDetailClicked", customEvent =>{
  const parkDialog = document.querySelector("#parkDialog")
  const parkDialogText = document.querySelector("#parkDialog__text")
  

  const clickedPark = useParks().find( park  => park.id === customEvent.detail.clickedParkId)

  parkDialogText.innerHTML = `
    <h3>${clickedPark.name}</h3>
    <p>Entrance Fees:$${clickedPark.entranceFees[0].cost}</p>
    <p><a href=${clickedPark.url}>${clickedPark.fullName} Homepage</a></p>
    <p>Directions: ${clickedPark.directionsInfo} For more directions click <a href=${clickedPark.directionsUrl}>here</a>.</p>
    <select class="dropdown" id="activitySelect">
    <option value="0">Activities available at this park</option>
    ${clickedPark.activities.map((activityObject) => {
        const allActivites = activityObject.name;
        return `<option value=${activityObject.id}>${allActivites}</options>`;
      })
      .join("")}
  </select>
    
    
  `
parkDialog.showModal()
  
})


// export this to be planted in parkPreview render or converter?
export const parkDialog = () => {
  return `
    <dialog id="parkDialog">
      <div id="parkDialog__text"></div>
      <button id="closeDialog__park">close</button>
    </dialog>
  `
  
}