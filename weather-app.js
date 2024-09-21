let city = document.querySelector(".city");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let searchBox  = document.getElementById("searchBox");
let sea = document.getElementById("sea");
let weather = document.getElementById("weather")
window.onload = function(){
    weather.style.display = "none";  
}
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "0f97f3ae95a8d999866ea9ba3ff4c800";
async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + `°C`;
    humidity.innerHTML = data.main.humidity + `%`;
    wind.innerHTML = data.wind.speed + km/h;
};
sea.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    city.innerHTML = searchBox.value
    weather.style.display = "block"
})
let x = feels.innerHTML =Math.round(data.main.feels_like)