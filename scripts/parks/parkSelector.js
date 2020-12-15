import { useParks, getParks } from "./ParkProvider.js"

const parkSelectorTarget = document.querySelector(".navbar__park")



export const parkSelector = () => {
  getParks().then(()=>
    parkSelectorTarget.innerHTML = `
    <select class="dropdown" id="parkSelect">
      <option value="0">Please select a park...</option>
      ${
        useParks().map(parkObject =>{
          const allParks = parkObject.fullName 
          return `<option>${allParks}</options>`
        })
      }
    </select>`
  )
}