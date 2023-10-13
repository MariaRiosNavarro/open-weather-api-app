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
      console.log("firstdata--------------->", data);
      let cities = data;
      //   Extract the lat und long for the next Fetch
      //  If there are more citys with the same name (for example Berlin), we will display the Information for all

      //   let lat = cities[0].lat
      //   let lon = cities[0].lon

      cities.forEach((city) => {
        // console.log("city___________", city);

        let lat = city.lat;
        let lon = city.lon;

        // With the lat und lon we have all the information (&units=metric) for Celsius
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
        )
          .then((response) => response.json())
          .then((weatherData) => {
            let cityWeather = weatherData;
            console.log(
              "WETTERDATA----------!!!!!!!!!!!!!!!!!!!!",
              cityWeather
            );

            // Create the DOM HERE

            const card = document.createElement("article");
            const cardHeader = document.createElement("div");
            const cardTitle = document.createElement("h2");
            const cardCountry = document.createElement("span");
            const temp = document.createElement("h2");
            const description = document.createElement("h3");
            const time = document.createElement("time");

            // Temps
            const tempWrapper = document.createElement("div");
            const tempMax = document.createElement("h3");
            const tempMin = document.createElement("h3");
            // Others
            const infoWrapper = document.createElement("div");
            const pressure = document.createElement("h3");
            const humidity = document.createElement("h3");
            // Geo
            const geoCoords = document.createElement("h3");
            const sunrise = document.createElement("h3");
            const sunset = document.createElement("h3");

            // Conect/Append all elements with each other

            cardHeader.append(cardTitle, cardCountry, temp, time, description);
            tempWrapper.append(tempMax, tempMin);
            infoWrapper.append(pressure, humidity);
            geoCoords.append(sunrise, sunset);
            card.append(cardHeader, tempWrapper, infoWrapper, geoCoords);
            output.append(card);

            // give data to the created elements

            cardTitle.textContent = city.name;
            time.textContent = cityWeather.timezone;
            cardCountry.textContent = city.country;
            temp.textContent = cityWeather.main.temp;
            description.textContent = cityWeather.weather[0].description; //we use only the first description, if there more as 1;
            tempMax.textContent = cityWeather.main.temp_max;
            tempMin.textContent = cityWeather.main.temp_min;
            pressure.textContent = cityWeather.main.pressure;
            humidity.textContent = cityWeather.main.humidity;
            geoCoords.textContent = `${lat}/${lon}`;
            sunrise.textContent = cityWeather.sys.sunrise;
            sunset.textContent = cityWeather.sys.sunset;
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
