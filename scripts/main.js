// previewList()
// parkSelect()
// eaterySelect()
// attractionSelect()
// itineraryList()

// Imports
import { getAttractions } from "./attractions/attractionProvider.js"
import { getEateries } from "./eateries/eateryProvider.js"
import { getParks } from "./parks/parkProvider.js"
import { weatherList } from "./weather/weatherList.js";

console.log(getAttractions())
console.log(getEateries())
getParks()
weatherList("37128");