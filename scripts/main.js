// previewList()
// parkSelect()
// eaterySelect()
// attractionSelect()
// itineraryList()
import { getEateries } from "./eateries/eateryProvider.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import { EaterySelect } from "./eateries/eaterySelector.js"
import { getParks } from "./parks/ParkProvider.js"
import "./weather/weatherList.js";
import "./previewList.js"
import "./eateries/eateryPreview.js"

EaterySelect()
console.log(getAttractions())
console.log(getEateries())
getParks()






import { attractionSelect } from "./attractions/attractionSelect.js"
attractionSelect()
import "./attractions/attractionPreview.js"



import { itineraryList } from "./savedItineraries/itineraryList.js";
itineraryList();