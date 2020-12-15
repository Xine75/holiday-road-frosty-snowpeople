import { useParks, getParks } from "./ParkProvider.js"

const parkSelectorTarget = document.querySelector(".navbar__park")

const eventHub = document.querySelector(".container")

export const parkSelector = () => {
  getParks().then(()=>
    parkSelectorTarget.innerHTML = `
    <select class="dropdown" id="parkSelect">
      <option value="0">Please select a park...</option>
      ${
        useParks().map(parkObject =>{
          const allParks = parkObject.fullName 
          return `<option value=${parkObject.id}>${allParks}</options>`
        })
      }
    </select>`
  )
}

//event to dispatch selection
eventHub.addEventListener("change", changeEvent => {
  if (changeEvent.target.id === "parkSelect"){
    const parks = useParks()
    for (const park of parks){
      if(changeEvent.target.value === park.id){
      return  park.longitude, park.latitude
      }
    }
    
    const customEvent = new CustomEvent("parkSelected",{
      detail: {
        parkID: changeEvent.target.value,
        latitude: park.latitude ,
        longitude: park.longitude
        
      }
    })
    eventHub.dispatchEvent(customEvent)
  }
})
 