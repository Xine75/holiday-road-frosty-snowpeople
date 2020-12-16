// Translate JS api data into HTML(Will be sent to the List component)




export const parkHTMLConverter = parkObject => {
  return `
    <section class="park__data">
      <div class="park__data--text">
        <h1>${parkObject.fullName}</h2>  
        <p><a href=${parkObject.url}>${parkObject.fullName} Homepage</a></p>
        <p>Description:${parkObject.description}</p>
      </div>
       <button class="detail--parks">Details</button>
  </section>
  `
}

