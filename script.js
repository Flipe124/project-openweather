
const APIKEY = "adec8ccc02a175f08abeb38cf96d4931"
const apiCountryUrl = "https://countryflagsapi.com/png/"

const cityName = document.querySelector("#city-name");
const searchbutton = document.querySelector("#search");

// Data
const cityNameElement = document.querySelector("#city-data");
const temperatureElement = document.querySelector("#temperature span");
const descriptionElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryIconElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

// Func
const getweatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}&lang=pt_br`;

    const responseAPI = await fetch(apiWeatherURL);
    const data = await responseAPI.json();

    console.log("DATA" + data);
};

const showWeatherData = (city) => {
    getweatherData(city);
};

// Event
searchbutton.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityName.value;

    showWeatherData(city);
});