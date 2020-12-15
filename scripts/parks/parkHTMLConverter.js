// Translate JS api data into HTML(Will be sent to the List component)




export const parkHTMLConverter = parkObject => {
  return `
    <section class="park__data">
      <div>
        <h1>${parkObject.fullName}</h2>  
        <p>Website:${parkObject.url}</p>
        <p>Description:${parkObject.description}</p>
      </div>
       <button class="detail--parks">Details</button>
  </section>
  `
}

