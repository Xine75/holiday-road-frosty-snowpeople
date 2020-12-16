// Fetches API data and converts to JS-readable object .json()

//Create an array for attractions
let attractionsArray = []

//Make a copy of that array for later manipulation
export const useAttractions = () => attractionsArray.slice()

//Fetch the attraction info from the external API
//Turn that into JS-readable data with .json()
//Console.log to check the fetch worked
//Put the ordered/formatted attractions inot the attractions array
export const getAttractions = () => {
    return fetch ("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(
        orderedAttractions => {
            //console.table(orderedAttractions)
            attractionsArray = orderedAttractions
        }
    )
}