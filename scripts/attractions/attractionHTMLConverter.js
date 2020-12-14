// Translate JS api data into HTML(Will be sent to the List component)
// Also handles the selectors from the option dropdowns

//imports data for use in Selectors
import { getAttractions, useAttractions } from "./attractionProvider.js"

//Creates HTML to render to DOM in preview
export const attractionObj = (attraction) => {
    return `
    <article class="preview__attraction">
    <h1>${attraction.name}</h1>
    <div class="attraction__description>${attraction.description}</div>
    </article>
    `

}
//Declares eventHub variable and where it will be anchored to DOM
const eventHub = document.querySelector(".container")

//Get a reference to the DOM element whre the <select> will be rendered
const attractionTarget = document.querySelector("navbar__attraction")



