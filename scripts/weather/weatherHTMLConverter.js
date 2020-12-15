// This is responsible for translating each day's forecast (at 15:00:00) into HTML.
// An image is pulled from weatherImages that relates to the corresponding icon code
// The temp of the day is shown
// The description of the weather is also shown

export const weatherHTMLConverter = (day) => {
    // Convert Unix Time to milliseconds
    // Turn into a dateObject
    // Split out the month, day & year
    // Store these in mm/dd/yyyy format (fullDate)
    const milliseconds = day.dt * 1000
    const dateObject = new Date(milliseconds)
    const m = dateObject.getMonth()+1
    const d = dateObject.getDate()
    const y = dateObject.getFullYear()
    const fullDate = `${m}/${d}/${y}`
    
    return`
        <div class="forecast__day">
            <div class="forecast__day__img">
                <img src='/images/weatherImages/${day.weather[0].icon}.png' alt='${day.weather[0].description}'>
            </div>
            <div class="forecast__day__date">
                ${fullDate}
            </div>
            <div class="forecast__day__minTemp">
                Min: ${Math.round(day.temp.min)} &#8457
            </div>
            <div class="forecast__day__maxTemp">
                Max: ${Math.round(day.temp.max)} &#8457
            </div>
            <div class="forecast__day__desc">
                ${day.weather[0].description}
            </div>
        </div>
    `;
}