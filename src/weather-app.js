let key = "3f6be1c407b0d9d1933561808db358ba";
let city = "Barcelona";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;

function displayTempDate(response) {
  console.log(response.data);
  console.log(apiUrl);

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

  let temperature = document.querySelector("#number-temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let minTemp = document.querySelector("#min-temp");
  minTemp.innerHTML = Math.round(response.data.main.temp_min);
  let maxTemp = document.querySelector("#max-temp");
  maxTemp.innerHTML = Math.round(response.data.main.temp_max);
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
}
axios.get(apiUrl).then(displayTempDate);

function search(city) {
  let key = "3f6be1c407b0d9d1933561808db358ba";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;
  axios.get(apiUrl).then(displayTempDate);
}
function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  search(city.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submit);
