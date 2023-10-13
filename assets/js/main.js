import { api_key } from "../../config";

const cityInput = document.querySelector('[data-js="city"]');
const searchButton = document.querySelector('[data-js="search"]');

searchButton.addEventListener("click", () => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=${api_key}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error Message", error);
    });
});
