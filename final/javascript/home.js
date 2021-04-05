// Menu
function toggleMenu() {
    document.getElementsByClassName("nav-bar")[0].classList.toggle("menu-id");
  }

// Current Date
function showDate() {
  var userDate = new Date();
  var year = userDate.getFullYear();
  if (year < 1000 ){
    year +=1900;
  }
  var day = userDate.getDay();
  var month = userDate.getMonth();
  var daym = userDate.getDate();
  var dayarray = new Array("Sunday,", "Monday,", "Tuesday,", "Wednesday,","Thursday,","Friday,","Saturday,");
  var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

var myDate = document.getElementById("currentDate");
myDate.textContent = "Today: " +dayarray[day]+ " " + daym+ " " +montharray[month]+ " " +year;
myDate.innerText= "Today: " +dayarray[day]+ " " + daym+ " " +montharray[month]+ " " +year;
}

showDate();

// Weather Summary
fetch("https://api.openweathermap.org/data/2.5/weather?lat=31.105862&lon=-97.353287&appid=d3860fdc94ef1e7570d2672151dd4ef7")

.then(function (response) {
  return response.json();
})
.then(function (obj) {

  document.getElementById('city').textContent = obj.name;
  document.getElementById('condition').textContent = obj.weather[0].description;
  document.getElementById('temp').textContent = obj.main.temp + " °F";
  document.getElementById('humidity').textContent = obj.main.humidity + " %";

});

// Three Day Forecast
fetch("https://api.openweathermap.org/data/2.5/forecast?lat=31.105862&lon=-97.353287&appid=d3860fdc94ef1e7570d2672151dd4ef7")

.then(function (response) {
  return response.json();
})

.then(function (forecastObj) {

});

// Home Events

var events = {
  "homeEvents": [
{
  "name": "Upcoming Events",
  "firstEvent": "April 14: Two Minutes to Midnight and the Architecture of Armageddon",
  "secondEvent": "May 1: Family Day at Temple Railroad & Heritage Museum",
  "thirdEvent": "May 7: First Friday "
}]

}

var getId = document.getElementById('home-events');
for(var i=0;i<events.homeEvents.length;i++) {
  
  getId.innerHTML += '<h2 class="name">' +events.homeEvents[i].name + '</h2>';
  getId.innerHTML += '<p class="address">' +events.homeEvents[i].firstEvent + '</p>';
  getId.innerHTML += '<p class="member">' +events.homeEvents[i].secondEvent + '</p>';
  getId.innerHTML += '<p class="phone">' +events.homeEvents[i].thirdEvent + '</p>';
}

// from list to grid