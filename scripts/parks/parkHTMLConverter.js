// Translate JS api data into HTML(Will be sent to the List component)
// Also handles the selectors from the option dropdowns



export const parkHTMLConverter = () => {
  return `
    <section class="park__data">
     <div>
      <h2>${parkObject.fullName} </h2>
      <p>Website:${parkObject.url}</p>
      <p></p>   
      <button class="detail__parks">Details</button>
     </div>
  </section>
  `
}

