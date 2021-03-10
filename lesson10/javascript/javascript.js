
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

// Current Weather for Weather Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1";

fetch(apiURL)
 .then((response) => response.json())
 .then((town) => {
   console.log(town);
   let description = town.weather[0].description;
   document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
   document.getElementById('temp').innerHTML = Math.round(town.main.temp);
   document.getElementById('humidity').innerHTML = town.main.humidity;
   document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
});

// Windchill
const temp = document.getElementById('temp').innerHTML;
const windspeed = document.getElementById('windspeed').innerHTML;


let windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temp * Math.pow(windspeed, .16));
  if (temp <= 50 && windspeed > 3) {
     windchill = Math.round(windchill);
  } else {
     windchill = "N/A";
  }
document.getElementById('windchill').innerHTML = windchill;

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

