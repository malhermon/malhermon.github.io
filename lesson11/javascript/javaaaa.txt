// API URL from OpenWeatherMap.org
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=e69ce65d7caaa3280ccf25e0403133f9';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject); // uncomment out to see in inspect console    
        document.getElementById('current-temp').innerHTML = Math.round(jsObject.main.temp) + " &#176;F";
        document.getElementById('high-temp').innerHTML = Math.round(jsObject.main.temp_max) + " &#176;F";
        document.getElementById('low-temp').innerHTML = Math.round(jsObject.main.temp_min) + " &#176;F";
        document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('humidity').textContent = jsObject.main.humidity;

        // Calculate Windchill (from current-temp - jsObject.main.temp & windspeed - jsObject.wind.speed) for wc (windchill) variable
        let t = (Math.round(jsObject.main.temp));
        let s = (Math.round(jsObject.wind.speed));
        let wc = "N/A";
        if (t <= 50 && s >= 3.0) {
            let calc = (35.74 + (.6215 * t)) - (35.75 * (Math.pow(s, .16))) + (.4275 * (t * (Math.pow(s, .16))));
            wc = Math.round(calc) + " &#176;F";
        }
        // Inject wc var into windchill innerHTML element
        document.getElementById("windChill").innerHTML = wc;
    });

// Forecast API from OpenWeatherMap.org
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=e69ce65d7caaa3280ccf25e0403133f9';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // OpenWeatherMAP.org Forecast Array for Weekdays
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        var header = document.getElementsByClassName("fHeader");
        var img = document.getElementsByClassName("fImg");

        // dt_txt to pull 6 pm (18:00:00) data
        var data = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
        var theTemp = document.getElementsByClassName("fTemp");

        for (var i = 0; i < data.length; i++) {
            var d = new Date(data[i].dt_txt);
            // Sets fcHeader array to start on current day
            header[i].textContent = weekday[d.getDay()];

            // OpenWeatherMAP.org Forecast Icons
            const images = 'https://openweathermap.org/img/w/' + data[i].weather[0].icon + '.png';
            const description = data[i].weather[0].description;
            img[i].setAttribute('src', images);
            img[i].setAttribute('alt', description);

            // OpenWeatherMAP.org Forecast Temperature
            theTemp[i].innerHTML = Math.round(data[i].main.temp) + " &#176;F";
        }

    });