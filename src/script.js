let currentSlide = 0;

function getWeatherIcon(temp) {
    if (temp > 25) return '☀️';
    if (temp > 15) return '⛅';
    return '🌧️';
}

async function fetchWeatherData() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=27.4745&longitude=94.9110&current_weather=true&hourly=temperature_2m&daily=temperature_2m_max&timezone=Asia/Kolkata&forecast_days=5');
        const data = await response.json();
        updateWeatherDisplay(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeatherDisplay(data) {
    // Current weather
    const currentTemp = Math.round(data.current_weather.temperature);
    document.getElementById('current-temp').textContent = `${currentTemp}°C`;
    document.getElementById('current-time').textContent = new Date().toLocaleString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true 
    });
    document.getElementById('current-icon').textContent = getWeatherIcon(currentTemp);

    // Hourly forecast
    const hourlyForecast = document.getElementById('hourly-forecast');
    hourlyForecast.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const temp = Math.round(data.hourly.temperature_2m[i]);
        const time = new Date(data.hourly.time[i]).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
        hourlyForecast.innerHTML += `
            <div class="forecast-item">
                <p>${temp}°C</p>
                <div class="weather-icon">${getWeatherIcon(temp)}</div>
                <p>${time}</p>
            </div>
        `;
    }

    // Daily forecast
    const dailyForecast = document.getElementById('daily-forecast');
    dailyForecast.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const temp = Math.round(data.daily.temperature_2m_max[i]);
        const day = new Date(data.daily.time[i]).toLocaleDateString('en-US', { weekday: 'short' });
        dailyForecast.innerHTML += `
            <div class="forecast-item">
                <p>${temp}°C</p>
                <div class="weather-icon">${getWeatherIcon(temp)}</div>
                <p>${day}</p>
            </div>
        `;
    }
}

// Initial fetch
fetchWeatherData();

// Refresh weather data every 15 minutes
setInterval(fetchWeatherData, 900000);

// Auto-slider
setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    const forecasts = [
        document.getElementById('hourly-forecast'),
        document.getElementById('daily-forecast')
    ];
    forecasts.forEach((forecast, index) => {
        forecast.style.display = currentSlide === index ? 'flex' : 'none';
    });
}, 4000);