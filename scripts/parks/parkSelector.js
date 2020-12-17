import { useParks, getParks } from "./ParkProvider.js";

const parkSelectorTarget = document.querySelector(".navbar__park");

const eventHub = document.querySelector(".container");

export const parkSelector = () => {
  getParks().then(
    () =>
      (parkSelectorTarget.innerHTML = `
    <select class="dropdown" id="parkSelect">
      <option value="0">Please select a park...</option>
      ${useParks()
        .map((parkObject) => {
          const allParks = parkObject.fullName;
          return `<option value=${parkObject.id}>${allParks}</options>`;
        })
        .join("")}
    </select>`)
  );
};

//event to dispatch selection SWITCH TO FIND METHOD FOR CONCISE CODE
eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "parkSelect") {
    const parks = useParks();
    let parkId = "0";
    let longitude = 0;
    let latitude = 0;
    let parkState= ""
    
    for (const park of parks) {
      if (changeEvent.target.value === park.id) {
        parkId = park.id;
        longitude = park.longitude;
        latitude = park.latitude;
        parkState = park.states
      }
      }
      const customEvent = new CustomEvent("parkSelected", {
        detail: {
          parkID: parkId,
          latitude: latitude,
          longitude: longitude,
          parkState: parkState
        },
      });
      eventHub.dispatchEvent(customEvent);
    
  }
});
