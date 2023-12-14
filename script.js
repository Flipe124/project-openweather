
const APIKEY = "adec8ccc02a175f08abeb38cf96d4931";

const cityName = document.querySelector("#city-name");
const searchbutton = document.querySelector("#search");

// Data
const cityNameElement = document.querySelector("#city-data");
const temperatureElement = document.querySelector("#temperature span");
const descriptionElement = document.querySelector("#description-data");
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

    return data;
};

const showWeatherData = async (city) => {
    const data = await getweatherData(city);

    if(data.cod === "404") {
        weatherData.classList.add("hide");
        showErrorMessage();
        return
    }
    
    document.querySelector(".error-message p").innerHTML = "";

    cityNameElement.innerText = data.name;
    temperatureElement.innerText = parseInt(data.main.temp) + "°C";
    descriptionElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryIconElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}Km/h`;

    weatherData.classList.remove("hide");
};

// Event
searchbutton.addEventListener("click", async (e) => {
    e.preventDefault();

    const city = cityName.value;

    showWeatherData(city);
});

cityName.addEventListener("keyup", (e) => {
    if(e.code == "Enter") {
        const city = e.target.value;
        showWeatherData(city);
    }
})

// Error
const showErrorMessage = (field) => {
    const field_error_message = document.querySelector(".error-message p");

    field_error_message.innerHTML = "Cidade não encontrada, cheque se o nome está escrito corretamente.";

}