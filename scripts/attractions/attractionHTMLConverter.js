// Translate JS api data into HTML(Will be sent to the List component)


//Creates HTML to render to DOM in preview
//will be imported by previewList
export const attractionHTML = (attraction) => {
    return `
    <section class="preview__attraction">
    <div>
    <h1 class="attraction__data--name">Attraction: ${attraction.name}</h1>
    <p class="attraction__data--description">${attraction.description}</p>
    <p class="attraction__data--location">Location: ${attraction.city}, ${attraction.state}</p>
    </div>
    <button class="detail--attractions">Bizararrie Details</button>
    </section>
    `
}
//Checking HTML Converter
//console.log(attractionObj)






