import { api_key } from "/config.js";
import { countries } from "/assets/db/countries.js";

// const myKey = process.env.API_KEY;

const myKey = api_key;

const cityInput = document.querySelector('[data-js="city"]');
const searchButton = document.querySelector('[data-js="search"]');
const output = document.querySelector('[data-js="output"]');

// let country = "DE";

searchButton.addEventListener("click", () => {
  // Fetch the Place (Default Germany)
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=${myKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("firstdata--------------->", data);
      let cities = data;
      //   Extract the lat und long for the next Fetch
      //  If there are more citys with the same name (for example Berlin), we will display the Information for all

      cities.forEach((city) => {
        let lat = city.lat;
        let lon = city.lon;

        // With the lat und lon we have all the information (&units=metric) for Celsius
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${myKey}`
        )
          .then((response) => response.json())
          .then((weatherData) => {
            let cityWeather = weatherData;
            console.log("--------", cityWeather);

            // #Create the DOM HERE

            // #cardheader

            const cardHeader = document.createElement("article");
            cardHeader.classList.add("card-header");
            const cardTitle = document.createElement("h2");
            cardTitle.classList.add("card-title");
            const geoCoords = document.createElement("p");
            geoCoords.classList.add("card-coords");

            // appendChild
            cardHeader.appendChild(cardTitle);
            cardHeader.appendChild(geoCoords);

            // #card

            const card = document.createElement("article");
            card.classList.add("card");

            // -1 Bubble (Weather)
            const subcardUP = document.createElement("div");
            subcardUP.classList.add("subcard-up");

            // -1.1 Bubble (Weather Wrapper)
            const weatherWrapper = document.createElement("div");
            weatherWrapper.classList.add("weather-wrapper", "drop", "drop-one");
            const temp = document.createElement("h2");
            temp.classList.add("card-temp");
            const minMaxCard = document.createElement("div");
            minMaxCard.classList.add("min-max-card");
            const tempMin = document.createElement("span");
            const separationSpan = document.createElement("span");
            const tempMax = document.createElement("span");
            const description = document.createElement("div");
            description.classList.add("card-description");
            // appendChild
            minMaxCard.appendChild(tempMin);
            minMaxCard.appendChild(separationSpan);
            minMaxCard.appendChild(tempMax);
            weatherWrapper.appendChild(temp);
            weatherWrapper.appendChild(minMaxCard);
            weatherWrapper.appendChild(description);
            subcardUP.appendChild(weatherWrapper);

            // -1.2 Bubble (Location & Time)
            // Extract name of Country with the countries array

            let countryName = "";
            let countryCode = city.country;
            countries.forEach((country) =>
              country.code === countryCode ? (countryName = country.name) : ""
            );

            const timeWrapper = document.createElement("div");
            timeWrapper.classList.add("time-wrapper", "drop", "drop-two");
            const cardCountry = document.createElement("h4");
            cardCountry.classList.add("card-country");
            const time = document.createElement("h3");
            time.classList.add("card-time");
            const timeBlockSpan = document.createElement("span");
            timeBlockSpan.classList.add("block-span", "time");
            time.innerHTML = "Local Time: ";
            // appendChild
            time.appendChild(timeBlockSpan);
            timeWrapper.appendChild(cardCountry);
            timeWrapper.appendChild(time);
            subcardUP.appendChild(timeWrapper);
            card.appendChild(subcardUP);

            // -2 Bubble (Middle)
            const subcardMiddle = document.createElement("div");
            subcardMiddle.classList.add("subcard-middle");

            // -2.1 Bubble (Image Wrapper)
            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("image-wrapper", "drop-three");
            const cardIcon = document.createElement("img");
            // appendChild
            cardIcon.classList.add("image");
            imageWrapper.appendChild(cardIcon);
            subcardMiddle.appendChild(imageWrapper);
            card.appendChild(subcardMiddle);

            // -3 Bubble (Down)
            const subcardDown = document.createElement("div");
            subcardDown.classList.add("subcard-down");

            // -3.1 Bubble (Sunrise & Sunset)
            const litleWrapperOne = document.createElement("div");
            litleWrapperOne.classList.add("litle-wrapper", "drop", "drop-four");
            const sunrise = document.createElement("h4");
            sunrise.innerHTML = "Sunrise:";
            const sunset = document.createElement("h4");
            sunset.innerHTML = "Sunset:";
            const sunriseBlockSpan = document.createElement("span");
            const sunsetBlockSpan = document.createElement("span");
            // appendChild
            sunriseBlockSpan.classList.add("sunrise", "block-span");
            sunsetBlockSpan.classList.add("sunset", "block-span");
            litleWrapperOne.appendChild(sunrise);
            litleWrapperOne.appendChild(sunset);
            sunrise.appendChild(sunriseBlockSpan);
            sunset.appendChild(sunsetBlockSpan);

            // -3.2 Bubble (Clouds & Humidity)
            const litleWrapperTwo = document.createElement("div");
            litleWrapperTwo.classList.add("litle-wrapper", "drop", "drop-five");
            const clouds = document.createElement("h4");
            clouds.innerHTML = "Clouds:";
            const humidity = document.createElement("h4");
            humidity.innerHTML = "Humidity:";
            const cloudsBlockSpan = document.createElement("span");
            const humidityBlockSpan = document.createElement("span");
            // appendChild
            cloudsBlockSpan.classList.add("clouds", "block-span");
            humidityBlockSpan.classList.add("humidity", "block-span");
            litleWrapperTwo.appendChild(clouds);
            litleWrapperTwo.appendChild(humidity);
            clouds.appendChild(cloudsBlockSpan);
            humidity.appendChild(humidityBlockSpan);

            // -3.3 Bubble (Pressure & Wind Speed)
            const litleWrapperThree = document.createElement("div");
            litleWrapperThree.classList.add(
              "litle-wrapper",
              "drop",
              "drop-six"
            );
            const pressure = document.createElement("h4");
            pressure.innerHTML = "Pressure:";
            const windSpeed = document.createElement("h4");
            windSpeed.innerHTML = "Wind speed:";
            const pressureBlockSpan = document.createElement("span");
            const windSpeedBlockSpan = document.createElement("span");
            pressureBlockSpan.classList.add("pressure", "block-span");
            windSpeedBlockSpan.classList.add("wind-speed", "block-span");
            // appendChild
            litleWrapperThree.appendChild(pressure);
            litleWrapperThree.appendChild(windSpeed);
            pressure.appendChild(pressureBlockSpan);
            windSpeed.appendChild(windSpeedBlockSpan);
            subcardDown.appendChild(litleWrapperOne);
            subcardDown.appendChild(litleWrapperTwo);
            subcardDown.appendChild(litleWrapperThree);
            card.appendChild(subcardDown);

            // !!CONTENT
            cardTitle.textContent = city.name;
            geoCoords.textContent = `${lat.toFixed(2)}/${lon.toFixed(2)}`;
            temp.textContent = `${cityWeather.main.temp.toFixed(1)}°`;
            tempMin.textContent = `${cityWeather.main.temp_min.toFixed(1)}°`;
            separationSpan.textContent = "-";
            tempMax.textContent = `${cityWeather.main.temp_max.toFixed(1)}°`;
            description.textContent = cityWeather.weather[0].description; //we use only the first description, if there more as 1;
            cardCountry.textContent = countryName;
            const timestamp = cityWeather.dt;
            // time calculation
            const localTime = new Date(timestamp * 1000);
            const hours = localTime.getHours();
            const minutes = localTime.getMinutes();
            const formattedTime = `${hours}:${String(minutes).padStart(
              2,
              "0"
            )}`; //Allways 2 numbers in minutes
            timeBlockSpan.textContent = `${formattedTime}`;
            cardIcon.src = `https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`;

            // sunrise calculation
            const sunriseData = cityWeather.sys.sunrise;
            const sunriseTime = new Date(sunriseData * 1000);
            const sunriseHours = sunriseTime.getHours();
            const sunriseMinutes = sunriseTime.getMinutes();
            const formattedSunrise = `${sunriseHours}:${String(
              sunriseMinutes
            ).padStart(2, "0")}`; //Allways 2 numbers in minutes
            sunriseBlockSpan.textContent = `${formattedSunrise}`;
            // sunset calculation
            const sunsetData = cityWeather.sys.sunset;
            const sunsetTime = new Date(sunsetData * 1000);
            const sunsetHours = sunsetTime.getHours();
            const sunsetMinutes = sunsetTime.getMinutes();
            const formattedSunset = `${sunsetHours}:${String(
              sunsetMinutes
            ).padStart(2, "0")}`; //Allways 2 numbers in minutes
            sunsetBlockSpan.textContent = `${formattedSunset}`;
            cloudsBlockSpan.textContent = `${cityWeather.clouds.all} %`;
            humidityBlockSpan.textContent = `${cityWeather.main.humidity} %`;
            pressureBlockSpan.textContent = `${cityWeather.main.pressure} hPa`;
            let windSpeedMS = cityWeather.wind.speed;
            let windSpeedKMH = Math.ceil(windSpeedMS * 3.6);
            windSpeedBlockSpan.textContent = `${windSpeedKMH} km/h`;
            // ADD to main Output
            output.appendChild(cardHeader);
            output.appendChild(card);

            //Remove old input & place the focus inside for the next search

            cityInput.value = "";
            cityInput.focus();
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

// Stylehttps://sarcadass.github.io/granim.js/examples.html

// let granimInstance = new Granim({
//   element: "#canvas-basic",
//   direction: "top-bottom",
//   isPausedWhenNotInView: true,
//   states: {
//     "default-state": {
//       gradients: [
//         ["#ff9966", "#ff5e62"],
//         ["#00F260", "#0575E6"],
//         ["#e1eec3", "#f05053"],
//       ],
//     },
//   },
// });
