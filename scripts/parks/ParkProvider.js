// Fetches API data and converts to JS-readable object .json()
// May store the API data locally if there is an issue with the server


let parks = []

export const useParks = () => {
  return parks.slice()
}



export const getParks = () => {
  return fetch("http://localhost:8088/data")
  .then(response => response.json())
  .then(
    parsedParks => {
      console.table(parsedParks)
      parks = parsedParks
    }
  )
}