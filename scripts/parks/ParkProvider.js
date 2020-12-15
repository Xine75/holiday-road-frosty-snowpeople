
// storing the API data locally as there is a slight issue with fetching it from site


let parks = []

export const useParks = () => {
  return parks.slice()
}



export const getParks = () => {
  return fetch("http://localhost:8088/data")
  .then(response => response.json())
  .then(
    parsedParks => {
      parks = parsedParks
    }
  )
}