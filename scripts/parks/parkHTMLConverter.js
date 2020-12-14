// Translate JS api data into HTML(Will be sent to the List component)
// Also handles the selectors from the option dropdowns

import { useParks, getParks } from "./ParkProvider.js"


 const parkSelectorTarget = document.querySelector(".navbar__park")


// export const parkHTMLConverter = () => {
//   return `
  
  
  
//   `
// }


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