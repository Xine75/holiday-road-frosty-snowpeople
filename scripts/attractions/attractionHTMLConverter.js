// Translate JS api data into HTML(Will be sent to the List component)


//Creates HTML to render to DOM in preview
//will be imported by previewList
export const attractionObj = (attraction) => {
    return `
    <article class="preview__attraction">
    <div class="attraction__data">
    <h1 class="attraction__data--name">${attraction.name}</h1>
    <p class="attraction__data--description">${attraction.description}</p>
    <p class="attraction__data--location">${attraction.city}, ${attraction.state}</p></div>
    <button class="detail--attractions">Details</button>
    </article>
    `
}
//Checking HTML Converter
console.log(attractionObj)






