const apiKey = "e05bc71fa21bc776d4e5b5df72125f3a";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(cityName) {
  // cityName = "Montreal";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  console.log(apiURL);

  const response = await fetch(apiURL);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
// checkWeather();
