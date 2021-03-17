// Menu
function toggleMenu() {
  document.getElementsByClassName("nav-bar")[0].classList.toggle("menu-id");
}

// Date and year
const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay() 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var dateStr = day1[day] + ', ' + date + " " + month1[month] + " " + year;
document.getElementById("currentDate").innerHTML = dateStr;
document.getElementById("currentYear").innerHTML = year;

// Pancake Announcement
if (day1[day] == 'Friday') {
  document.getElementById("pancakes").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
  document.getElementById("pancakes").style.display = "block";
}
else {
  document.getElementById("pancakes").style.display = "none";
}

// Weather Summary
const apiURL_weather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=b1c4009595630e2651d3712160a3c1f6&units=imperial';

fetch(apiURL_weather)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        let temp = jsonObject.main.temp;
        let tempHigh = jsonObject.main.temp_max;
        let windspeed = jsonObject.wind.speed;

        document.getElementById('currently').textContent = jsonObject.weather[0].description;
        document.getElementById('temp').textContent = Math.round(temp);
        document.getElementById('humidity').textContent = jsonObject.main.humidity;
        document.getElementById('windspeed').textContent = Math.round(windspeed);

        //windchill
        
        let output = "N/A"
        if (temp <= 50 && windspeed > 3) {
            output = Math.round(35.74 + 0.6215 * temp - 35.75 * windspeed ** 0.16 + 0.4275 * temp * windspeed ** 0.16);
            output += " \xB0F";
        }

        document.getElementById("windchill").textContent = output;

    });


// 5 day forecast

const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1"

fetch(apiURL_forecast)
   .then(response => response.json())
   .then((jsObject) => {
       console.log(jsObject);
       const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

  console.log(forecastData);

  const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

   let day = 0;
  forecastData.forEach(forecast => {
    let x = new Date(forecast.dt_txt);
   document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
   document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
   document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
  document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
  day++;	  
  });
});

// Events

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
       if (towns[i].name == 'Preston') {
        let events = towns[i].events;
        for (let i=0; i < events.length; i++) {
        let event = document.createElement('p');
        event.innerHTML = events[i];
        document.querySelector('.town-events').appendChild(event);
        }
    }
   }
});