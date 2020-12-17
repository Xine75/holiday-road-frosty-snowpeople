import { weatherList } from "./weatherList.js";


export function getLocation() {
  if (navigator.geolocation) {
   return navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  const lat = position.coords.latitude  
  const lon = position.coords.longitude
 console.log("hello",lat, lon)
  return weatherList(lat, lon)
}

getLocation()