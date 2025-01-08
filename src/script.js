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


document.addEventListener('DOMContentLoaded', function() {
    // Handle main dropdown items
    document.querySelectorAll('.nav-item.relative').forEach(function(dropdown) {
        // Show dropdown on mouse enter
        dropdown.addEventListener('mouseenter', function() {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('hidden');
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.transform = 'translateY(0)';
            }
        });

        // Hide dropdown on mouse leave
        dropdown.addEventListener('mouseleave', function() {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.add('hidden');
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.transform = 'translateY(10px)';
            }
        });

        // Handle nested dropdowns
        const nestedDropdowns = dropdown.querySelectorAll('.nested-dropdown');
        nestedDropdowns.forEach(function(nestedDropdown) {
            // Show nested dropdown on mouse enter
            nestedDropdown.addEventListener('mouseenter', function(e) {
                const nestedMenu = this.querySelector('.nested-menu');
                if (nestedMenu) {
                    nestedMenu.classList.remove('hidden');
                    nestedMenu.style.opacity = '1';
                    nestedMenu.style.transform = 'translateY(0)';
                }
                // Prevent the main dropdown from closing
                e.stopPropagation();
            });

            // Hide nested dropdown on mouse leave
            nestedDropdown.addEventListener('mouseleave', function(e) {
                const nestedMenu = this.querySelector('.nested-menu');
                if (nestedMenu) {
                    nestedMenu.classList.add('hidden');
                    nestedMenu.style.opacity = '0';
                    nestedMenu.style.transform = 'translateY(10px)';
                }
                // Prevent the main dropdown from closing
                e.stopPropagation();
            });
        });
    });

    // Add hover effect for dropdown items
    document.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.classList.add('bg-slate-100');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('bg-slate-100');
        });
    });

    // Handle touch events for mobile
    document.querySelectorAll('.nav-item.relative').forEach(function(dropdown) {
        dropdown.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                // Close all other open dropdowns first
                document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                    if (menu !== dropdownMenu) {
                        menu.classList.add('hidden');
                        menu.style.opacity = '0';
                        menu.style.transform = 'translateY(10px)';
                    }
                });
                
                // Toggle current dropdown
                dropdownMenu.classList.toggle('hidden');
                if (!dropdownMenu.classList.contains('hidden')) {
                    dropdownMenu.style.opacity = '1';
                    dropdownMenu.style.transform = 'translateY(0)';
                } else {
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.transform = 'translateY(10px)';
                }
            }
        });
    });
});