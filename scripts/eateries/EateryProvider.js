// Fetches API data and converts to JS-readable object .json()
//creates slice of 
//intialize and empty array
let eateryArray = []

//return a copy of the array 
export const useEateries = () => eateryArray.slice()

//load database state into application state with a fetch()
//make sure that last ".then()" set the local eateries array
//variable to what is in the response from the API
export const getEateries = () => {

    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(
            parsedEateries => {
                // console.table(parsedEateries)
                eateryArray = parsedEateries
            }
        )

}