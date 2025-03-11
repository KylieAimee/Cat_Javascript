fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=327bcddfebe7b2e3b2f5f4cd270c64a5&units=metric'
)
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.main.temp);
    temperature.textContent = "Temperature: "+data.main.temp+"\u00B0C";
    description.textContent = "Description: "+data.weather[0].description;
    humidity.textContent = "Humidity: "+data.main.humidity;
    hightemp.textContent = "Today's High: "+data.main.temp_max+"\u00B0C";
    lowtemp.textContent = "Today's Low: "+data.main.temp_min+"\u00B0C";
    feelslike.textContent = "Feels Like Temperature: "+data.main.feels_like+"\u00B0C"

    //icon
    const weathericon = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    console.log(weathericon);

    icon.src = weathericon;
    icon.alt = data.weather[0].description;
});
