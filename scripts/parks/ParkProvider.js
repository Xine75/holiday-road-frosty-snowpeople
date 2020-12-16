
// storing the API data locally as there is a slight issue with fetching it from site


let parks = []

export const useParks = () => {
  return parks.slice()
}

//"http://localhost:8088/data"

export const getParks = () => {
  return fetch("https://developer.nps.gov/api/v1/parks?limit=498&api_key=LQQm52ab9VPeOewpPtjcSGpReo200bsyBXFC0H33")
  .then(response => response.json())
  .then(
    parsedParks => {
      parks = parsedParks.data
    }
  )
}