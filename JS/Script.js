import { getWeather } from "./Get.js";

const btnSearch = document.getElementById("btn-search");
const searchInput = document.getElementById("search-input");
const cityName = document.getElementById("city-name");
const description = document.getElementById("weather-description");
const temprature = document.getElementById("weather-temprature");

const btnSearch_click = async () => {
  if (searchInput.value.trim()) {
    try {
      let result = await getWeather(searchInput.value);
      setData(result);
    } catch (error) {}
  }
};
const setData = (data) => {
  if (data.cod == 200) {
    cityName.innerHTML = data.name;
    description.innerHTML = data.weather[0].description;
    temprature.innerHTML = `${(data.main.temp - 273.15).toFixed(
      2
    )} ${"&#8451;"}`;
  } else {
    cityName.innerHTML = data.cod;
    description.innerHTML = data.message;
    temprature.innerHTML = "";
  }
};
window.addEventListener("keydown", (e) => {
  if (e.code == "Enter" || e.code == "NumpadEnter") {
    btnSearch_click();
  }
});
btnSearch.addEventListener("click", btnSearch_click);
