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
