// const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=37.7749&lon=-122.4194&appid=ae1f764d60c5d059850f4fc254d0f756';

// async function getWeather(){
//     try {
//         const response = await fetch(url);
//         if(response.ok){
//             const result = await response.json();
//             console.log(result);
//         }else{
//             throw new Error(`Request failed:${response.status}`);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// getWeather();




function getWeather() {
    const apiKey = 'ae1f764d60c5d059850f4fc254d0f756'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            weatherInfo.innerHTML = `
            <img class="w_icon" src="https://openweathermap.org/img/w/${icon}.png" alt="Weather icon">
                <p>Weather in <span class="text-info">${city}</span></p>
                <p>Temperature: <span class="text-danger">${temperature}°C</span></p>
                <p>Description: <span class="desc">${description}</span></p>
            `;
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML=`
            <p class="text-danger" id="err">Something went<br />wrong please check city name<p>
            `
        });
}
