const API_KEY = `8540a9986211bd10524ed845daf7ab88`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    const url = await `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return showWeather(data);
}

const showWeather = (data) => {
    weather.innerHTML = `
     <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""> 
    </div>
    <div>
        <h1>${data.main.temp}° C</h1>
        <h2>${data.weather[0].main}</h2>
        <h1>Feels Like ${data.main.feels_like}° C</h1>
    </div>
    `
}

form.addEventListener("submit",(dets) => {
    getWeather(search.value);
    dets.preventDefault();
})