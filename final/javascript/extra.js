(async () => {
    await fetch("https://api.openweathermap.org/data/2.5/weather?lat=31.105862&lon=-97.353287&appid=d3860fdc94ef1e7570d2672151dd4ef7")
   
    .then(function (response) {
      return response.json();
  })
  
   .then((data) => {
    const name = data.name;
    const description = data.weather.description[0];
    const temp = data.main.temp;
    const humidity = data.main.humidity;
  
     document.getElementsByClassName("city").innerText = "City: " + name;
      document.getElementsByClassName("temp").innerText = "Temp: " + temp + "°F";
      document.getElementsByClassName("condition").innerText = "Condition: " + description;
      document.getElementsByClassName("humidity").innerText = "Humidity: " + humidity + "%";
  });
   })
  
  
  
  
  
  
  
    async function showWeather() {
     const weather = await fetch ("https://api.openweathermap.org/data/2.5/weather?lat=31.105862&lon=-97.353287&appid=d3860fdc94ef1e7570d2672151dd4ef7");
     let response = await weather.json ();
     console.log(response);
   }
  
   showWeather();
  