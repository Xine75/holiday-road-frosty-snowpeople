// This is responsible for translating each day's forecast (at 15:00:00) into HTML.
// An image is pulled from weatherImages that relates to the corresponding icon code
// The temp of the day is shown
// The description of the weather is also shown

export const weatherHTMLConverter = (day) => `
    <div class="forecast__day">
        <div class="forecast__day__img">
            <img src='/images/weatherImages/${day.weather[0].icon}.png' alt='${day.weather[0].description}'>
        </div>
        <div class="forecast__day__temp">
            ${day.main.temp} &#8457
        </div>
        <div class="forecast__day__desc">
            ${day.weather[0].description}
        </div>
    </div>
`;