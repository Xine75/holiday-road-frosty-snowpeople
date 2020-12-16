// Translate JS api data into HTML(Will be sent to the List component)

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event =>{
  if (event.target.id.includes("detail--")){
    let parkId = event.target.id
    const customEvent = new CustomEvent("parkDetailClicked", {
      detail: {
        clickedParkId: parkId.split("--")[1]
      }
      
    })
    
    eventHub.dispatchEvent(customEvent)
  }
  
})


export const parkHTMLConverter = parkObject => {
  return `
    <section class="park__data">
      <div>
        <h1>${parkObject.fullName}</h2>        
        <p>Description: ${parkObject.description}</p>
      </div>
       <button id="detail--${parkObject.id}">Details</button>
  </section>
  `
}

