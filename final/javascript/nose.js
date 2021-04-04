
fetch("https://api.openweathermap.org/data/2.5/weather?lat=31.105862&lon=-97.353287&appid=d3860fdc94ef1e7570d2672151dd4ef7")

.then(function (response) {
    return response.json();
})

 .then(function (data) {
  const name = data.name;
  const description = data.weather.description[0];
  const temp = data.main.temp;
  const humidity = data.main.humidity;

    document.getElementsByClassName("city").innerText = "City: " + name;
    document.getElementsByClassName("temp").innerText = "Temp: " + temp + "°F";
    document.getElementsByClassName("condition").innerText = "Condition: " + description;
    document.getElementsByClassName("humidity").innerText = "Humidity: " + humidity + "%";
});


fetch("https://api.openweathermap.org/data/2.5/weather?lat=31.105862&lon=-97.353287&appid=d3860fdc94ef1e7570d2672151dd4ef7")

.then(function (response) {
  return response.json();
})
.then(function (weather) {

  let name = weather.name;
  let description = weather.description[0];
  let temperature = weather.main.temp;
  let humidity = weather.main.humidity;

  document.getElementById('city').textContent = name;
  document.getElementById('condition').textContent = description;
  document.getElementById('temp').textContent = temperature + "°F";
  document.getElementById('humidity').textContent = humidity;

});