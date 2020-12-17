import { weatherList } from "./weatherList.js";

const localHeader = document.querySelector(".weatherHeader")

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
  return weatherList(lat, lon), localHeader.innerHTML = `<h3>Your local 5-day forecast</h3>`
}

getLocation()