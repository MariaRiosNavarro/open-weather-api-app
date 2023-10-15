// import { countries } from "./countries.js";
const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabw", code: "ZN" },
];

// const myKey = process.env.API_KEY;

// const myKey = "a210fd9e00bee0d760dcfd2fc1cb1ef5";

const cityInput = document.querySelector('[data-js="city"]');
const searchButton = document.querySelector('[data-js="search"]');
const output = document.querySelector('[data-js="output"]');

// let country = "DE";

searchButton.addEventListener("click", () => {
  // Fetch the Place (Default Germany)
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=a210fd9e00bee0d760dcfd2fc1cb1ef5`
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
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a210fd9e00bee0d760dcfd2fc1cb1ef5`
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
