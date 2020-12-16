// Translate JS api data into HTML (Will be sent to the List component)

export const itineraryHTMLer = (itineraryObject) => {
    return `
        <section class="itinerary">
            <div class="itinerary__name">${itineraryObject.name}</div>
        </section>
    `
}