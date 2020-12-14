// Fetches API data and converts to JS-readable object .json()

let attractions = []

export const useAttractions = () => attractions.slice()


export const getAttractions = () => {
    return fetch ("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(
        orderedAttractions => {
            console.table(orderedAttractions)
            attractions = orderedAttractions
        }
    )
}