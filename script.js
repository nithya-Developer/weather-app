function getWeather(){
// apikey
let apiKey = "0425777c2f4117ad5bd3bf3dfb41d158"

let city_name = document.getElementById("searchBar").value;

// url
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${apiKey}`

    fetch(url,{method:'GET'})   //calling api
    .then((res) => res.json())  //response
    .then((data) => {           //promise
    
    console.log(data);  //log recevied data

    console.log(data.name); //log city from recevied data 
    document.getElementById("weatherInCity").innerText = `weather in ${data.name}`;

    document.getElementById("weather").innerText = `${data.main.temp}°c`;
//  ----------------------
    let icon =  `${data.weather[0].icon}`;
    console.log(icon); //log city from recevied data
//  ----------------------
    let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    console.log(iconUrl); //log icon url from recevied data
// ----------------------  
    document.getElementById("img").src = `${iconUrl}` ;
// ----------------------
    console.log(`${data.weather[0].description}`); //log description from recevied data
    document.getElementById("description").innerText = `${data.weather[0].description}`;
//  ----------------------
    console.log(`humidity: ${data.main.humidity}%`); //log humidity from recevied data
    document.getElementById("humidity").innerText = `humidity: ${data.main.humidity}%`;
//  ----------------------
    console.log(`wind speed: ${data.wind.speed} KM/h`); //log wind speed from recevied data
    document.getElementById("wind").innerText = `wind speed: ${data.wind.speed} KM/h`;

}
)
}