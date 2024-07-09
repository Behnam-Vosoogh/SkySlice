const apiKey = "e05bc71fa21bc776d4e5b5df72125f3a";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=montreal&appid=${apiKey}&units=metric`;
async function checkWeather() {
  console.log(apiKey);

  const response = await fetch(apiURL);
  var data = await response.json();
  console.log(data);
  // document.querySelector(".city").innerHTML = data.name;
  // document.querySelector(".temp").innerHTML = data.main.temp + "°C";
}
checkWeather();
