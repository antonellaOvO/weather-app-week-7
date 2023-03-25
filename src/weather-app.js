let key = "3f6be1c407b0d9d1933561808db358ba";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let key = "3f6be1c407b0d9d1933561808db358ba";
  let units = "metric";
  let apiCurrentPositionUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang={lang}&units=${units}`;

  function displayCurrentPosition(response) {
    let now = new Date();
    let day = now.getDay();
    let numberDay = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let date = document.querySelector("#date");
    date.innerHTML = `${days[day]} ${numberDay}th ${months[month]} ${year}`;

    let city = document.querySelector("#city");
    city.innerHTML = response.data.name;

    let hour = now.getHours();
    let minutes = now.getMinutes();
    let time = document.querySelector("#time");
    time.innerHTML = `${hour}:${minutes}h`;

    celsiusTemp = response.data.main.temp;
    celsiusMinTemp = response.data.main.temp_min;
    celsiusMaxTemp = response.data.main.temp_max;
    celsiusFeelsTemp = response.data.main.feels_like;

    let temperature = document.querySelector("#number-temp");
    temperature.innerHTML = Math.round(celsiusTemp);
    let minTemp = document.querySelector("#min-temp");
    minTemp.innerHTML = Math.round(celsiusMinTemp);
    let maxTemp = document.querySelector("#max-temp");
    maxTemp.innerHTML = Math.round(celsiusMaxTemp);
    let feelsTemp = document.querySelector("#feels-temp");
    feelsTemp.innerHTML = Math.round(celsiusFeelsTemp);

    let pressure = document.querySelector("#pressure");
    pressure.innerHTML = Math.round(response.data.main.pressure);
    let visibility = document.querySelector("#visibility");
    visibility.innerHTML = Math.round(response.data.visibility);
    let windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerHTML = Math.round(response.data.wind.speed);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = Math.round(response.data.main.humidity);

    let iconTempNow = document.querySelector("#image-temp-now");
    iconTempNow.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconTempNow.setAttribute("alt", response.data.weather[0].description);

    let description = document.querySelector("#description");
    description.innerHTML = response.data.weather[0].description;

    getForecast(response.data.coord);
  }
  axios.get(apiCurrentPositionUrl).then(displayCurrentPosition);
}

navigator.geolocation.getCurrentPosition(showPosition);

function getForecast(coordinates) {
  let apiKey = "ccdfa0t87033541f5e32eba05o417fd7";
  let apiUnits = "metric";
  let lat = coordinates.lat;
  let lon = coordinates.lon;

  let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
  axios.get(apiUrlForecast).then(displayForecast);
}

function displayInputSearch(response) {
  let now = new Date();
  let day = now.getDay();
  let numberDay = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = document.querySelector("#date");
  date.innerHTML = `${days[day]} ${numberDay}th ${months[month]} ${year}`;

  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;

  let hour = now.getHours();
  let minutes = now.getMinutes();
  let time = document.querySelector("#time");
  time.innerHTML = `${hour}:${minutes}h`;

  celsiusTemp = response.data.main.temp;
  celsiusMinTemp = response.data.main.temp_min;
  celsiusMaxTemp = response.data.main.temp_max;
  celsiusFeelsTemp = response.data.main.feels_like;

  let temperature = document.querySelector("#number-temp");
  temperature.innerHTML = Math.round(celsiusTemp);
  let minTemp = document.querySelector("#min-temp");
  minTemp.innerHTML = Math.round(celsiusMinTemp);
  let maxTemp = document.querySelector("#max-temp");
  maxTemp.innerHTML = Math.round(celsiusMaxTemp);
  let feelsTemp = document.querySelector("#feels-temp");
  feelsTemp.innerHTML = Math.round(celsiusFeelsTemp);

  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = Math.round(response.data.main.pressure);
  let visibility = document.querySelector("#visibility");
  visibility.innerHTML = Math.round(response.data.visibility);
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);

  let iconTempNow = document.querySelector("#image-temp-now");
  iconTempNow.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconTempNow.setAttribute("alt", response.data.weather[0].description);

  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;

  getForecast(response.data.coord);
}

function search(city) {
  let key = "3f6be1c407b0d9d1933561808db358ba";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;
  axios.get(apiUrl).then(displayInputSearch);
}
function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  search(city.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submit);

//*Conversion celsius-fahrenheit*//
let celsiusTemp = null;
let celsiusMinTemp = null;
let celsiusMaxTemp = null;
let celsiusFeelsTemp = null;

function displayFahrenheitTemp(event) {
  event.preventDefault();
  /*remove active class*/
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");

  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  let temp = document.querySelector("#number-temp");
  temp.innerHTML = Math.round(fahrenheitTemp);

  let fahrenheitFeelsTemp = (celsiusFeelsTemp * 9) / 5 + 32;
  let feelsTemp = document.querySelector("#feels-temp");
  feelsTemp.innerHTML = Math.round(fahrenheitFeelsTemp);

  let fahrenheitMinTemp = (celsiusMinTemp * 9) / 5 + 32;
  let minTemp = document.querySelector("#min-temp");
  minTemp.innerHTML = Math.round(fahrenheitMinTemp);

  let fahrenheitMaxTemp = (celsiusMaxTemp * 9) / 5 + 32;
  let maxTemp = document.querySelector("#max-temp");
  maxTemp.innerHTML = Math.round(fahrenheitMaxTemp);

  let unitCelsiusMin = document.querySelector("#unit-celsius-min");
  unitCelsiusMin.innerHTML = "F";
  let unitCelsiusMax = document.querySelector("#unit-celsius-max");
  unitCelsiusMax.innerHTML = "F";
  let unitCelsiusFeels = document.querySelector("#unit-celsius-feels");
  unitCelsiusFeels.innerHTML = "F";
}

let fahrenheit = document.querySelector("#link-fahrenheit");

fahrenheit.addEventListener("click", displayFahrenheitTemp);

function displayCelsiusTemp(event) {
  event.preventDefault();
  /*remove active class*/
  fahrenheit.classList.remove("active");
  celsius.classList.add("active");
  let temperature = document.querySelector("#number-temp");
  temperature.innerHTML = Math.round(celsiusTemp);
  let minTemp = document.querySelector("#min-temp");
  minTemp.innerHTML = Math.round(celsiusMinTemp);
  let maxTemp = document.querySelector("#max-temp");
  maxTemp.innerHTML = Math.round(celsiusMaxTemp);
  let feelsTemp = document.querySelector("#feels-temp");
  feelsTemp.innerHTML = Math.round(celsiusFeelsTemp);
  let unitCelsiusMin = document.querySelector("#unit-celsius-min");
  unitCelsiusMin.innerHTML = "C";
  let unitCelsiusMax = document.querySelector("#unit-celsius-max");
  unitCelsiusMax.innerHTML = "C";
}
let celsius = document.querySelector("#link-celsius");
celsius.addEventListener("click", displayCelsiusTemp);

function formatDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#days");
  let forecastHTML = `<div id="days" class="row">`;
  let forecast = response.data.daily;
  console.log(response.data);

  forecast.forEach(function (forecastDay, index) {
    if (index < 7) {
      forecastHTML =
        forecastHTML +
        `<div id="col-days" class="col-2">
  <ul id="ul-days" class="tomorrow">
    <li id="li-days" class="img-tomorrow">
      <li id="li-day" class="tomorrow">${formatDate(forecastDay.time)}</li>
      <img
        class="img-forecast"
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
          forecastDay.condition.icon
        }.png"
        alt=""
      />
    </li>
     <li id="li-days" class="temp-tomorrow-max"><span class="temp-day-max">${Math.round(
       forecastDay.temperature.maximum
     )}º</span> | <span class="temp-day-min">${Math.round(
          forecastDay.temperature.minimum
        )}º</span></li>
  </ul>
</div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
