import { api_key } from "/config.js";

const cityInput = document.querySelector('[data-js="city"]');
const searchButton = document.querySelector('[data-js="search"]');
const output = document.querySelector('[data-js="output"]');

let country = "DE";

searchButton.addEventListener("click", () => {
  // Fetch the Place (Default Germany)
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value},${country}&limit=5&appid=${api_key}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //   Extract the lat und long for the next Fetch
      let citys = data;

      //  If there are more citys with the same name (for example Berlin), we will display the Information for all

      citys.forEach((city) => {
        console.log(city);
        let lat = city.lat;
        let lon = city.lon;
        console.log(lat, lon);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(`${city.state}`, data);

            // Create the DOM
          })
          .catch((error) => {
            console.error("Error Message", error);
          });
      });
    })
    .catch((error) => {
      console.error("Error Message", error);
    });
});
