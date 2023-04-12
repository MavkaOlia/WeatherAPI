//Current date and time
function currentDate(dayFormat) {
  let date = now.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let month = now.getMonth();
  if (month < 10) {
    month = `0${month}`;
  }
  let year = now.getFullYear();
  return `${date}.${month}.${year}`;
}

function currentTime(time) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

let now = new Date();
let dateHeading = document.querySelector("#current-date");
dateHeading.innerHTML = currentDate(now);

let timeHeading = document.querySelector("#current-time");
timeHeading.innerHTML = currentTime(now);

function showCityTemp(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#degrees").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(city) {
  let apiKey = "fe1483f743b581b5520a1b725af03a49";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showCityTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  search(city);
}
function searchLocation(position) {
  let apiKey = "fe1483f743b581b5520a1b725af03a49";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCityTemp);
}
function showCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocation = document.querySelector("#location-icon");
currentLocation.addEventListener("click", showCurrentLocation);

search("Kyiv");

/*function fahrTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#degrees");
  tempElement.innerHTML = 66;
}
function celTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#degrees");
  tempElement.innerHTML = 19;
}
let fahrLetter = document.querySelector("#fahrenheit-link");
fahrLetter.addEventListener("click", fahrTemp);
let celLetter = document.querySelector("#celsius-link");
celLetter.addEventListener("click", celTemp);
*/
