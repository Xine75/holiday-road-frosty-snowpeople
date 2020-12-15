// previewList()
// parkSelect()
// eaterySelect()
// attractionSelect()
// itineraryList()
import { getEateries } from "./eateries/eateryProvider.js"
import { getAttractions } from "./attractions/attractionProvider.js"
import { EaterySelect } from "./eateries/eaterySelector.js"
import { getParks } from "./parks/ParkProvider.js"
import { weatherList } from "./weather/weatherList.js";


EaterySelect()
console.log(getAttractions())
console.log(getEateries())
getParks()
weatherList("16.16", "86.78");

