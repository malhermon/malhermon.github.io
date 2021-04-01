let weather = {
    apiKey: "d3860fdc94ef1e7570d2672151dd4ef7",
    fetchWeather: function (Temple) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=31.105862&lon=-97.353287&appid=d3860fdc94ef1e7570d2672151dd4ef7"
      )
      .then((response) => {
          return response.json();
      })
   
      .then((data) => this.showWeather(data));
    },
  
    showWeather: function (data) {
      
    const { name } = data.name;
    const { description } = data.weather[0];
    const { temp } = data.main;
    const { humidity } = data.humidity;
  
      document.querySelector('.city').innerTex = "City: " + name;
      document.querySelector('.temp').innerTex = "Temp: " + temp + "°F";
      document.querySelector('.condition'). innerText = "Condition: " + description;
      document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
  
    }};
  
  weather.fetchWeather("Temple");