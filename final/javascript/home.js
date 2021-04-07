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
document.getElementById('currentYear').innerHTML = year;
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
  document.getElementById('temp').textContent = Math.round(obj.main.temp)+ " °F";
  document.getElementById('humidity').textContent = obj.main.humidity + " %";

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

// Three Day Forecast

fetch("https://api.openweathermap.org/data/2.5/forecast?lat=31.0982&lon=-97.3428&appid=d3860fdc94ef1e7570d2672151dd4ef7")
   
.then(function (response) {
    return response.json();
  })

.then(function (object) {
    
  console.log(object);
  const data = object.list.filter((help)=>help.dt_txt.includes('18:00:00'));

  console.log(data);

  // set days

  var days = new Array(7);

  days[0] = "Sunday";
  days[1] = "Monday";
  days[2] = "Tuesday";
  days[3] = "Wednesday";
  days[4] = "Thursday";
  days[5] = "Friday";
  days[6] = "Saturday";

   let d = 0;

   data.forEach(dForecast => {
     
    let get = new Date(dForecast.dt_txt);

    // set date

    document.getElementById('date'+(d+1)).textContent = days[get.getDay()]; 

    // set icon images

    document.getElementById('icon'+(d+1)).src = "https://openweathermap.org/img/w/" + dForecast.weather[0].icon + ".png";
    document.getElementById('icon'+(d+1)).alt = dForecast.weather[0].description;


    // set temperature

    document.getElementById('temperature'+(d+1)).textContent = 'Temp ' + Math.round(dForecast.main.temp) + ' °F';
    document.getElementById('maxTemp'+(d+1)).textContent = 'High ' + dForecast.main.temp_max + ' °F';
    document.getElementById('minTemp'+(d+1)).textContent = 'Low ' +dForecast.main.temp_min + ' °F';

    // set next days

    d++;	
  });
});

