
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
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherData = document.querySelector("#data");

// Func
const getweatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}&lang=pt_br`;

    const responseAPI = await fetch(apiWeatherURL);
    const data = await responseAPI.json();

    console.log("DATA" + data);
    return data;
};

const showWeatherData = async (city) => {
    const data = await getweatherData(city);

    cityNameElement.innerText = data.name;
    temperatureElement.innerText = parseInt(data.main.temp);
    descriptionElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryIconElement.setAttribute("src", apiCountryUrl + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}Km/h`;

    weatherData.classList.remove("hide")
};

// Event
searchbutton.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityName.value;

    showWeatherData(city);
});