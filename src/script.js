const WEATHER_UPDATE_INTERVAL = 900000; // 15 minutes
const LOADING_STATE = {
    temp: '--',
    icon: '--',
    time: '--:--'
};

function getWeatherIcon(temp) {
    if (temp > 30) return '🌞';
    if (temp > 25) return '☀️';
    if (temp > 20) return '⛅';
    if (temp > 15) return '☁️';
    if (temp > 10) return '🌧️';
    return '⛈️';
}

function showLoadingState() {
    const widget = document.querySelector('.weather-widget');
    if (widget) {
        widget.classList.remove('loaded');
    }
    
    document.getElementById('current-temp').textContent = LOADING_STATE.temp;
    document.getElementById('current-icon').textContent = LOADING_STATE.icon;
    document.getElementById('current-time').textContent = LOADING_STATE.time;
    
    const hourlyForecast = document.getElementById('hourly-forecast');
    hourlyForecast.innerHTML = Array(4).fill(null).map(() => `
        <div class="forecast-slot loading-placeholder">
            <span class="text-xs">--:--</span>
            <span class="text-lg">--</span>
            <span class="text-xs">--°C</span>
        </div>
    `).join('');
}

function createForecastSlot(time, temp) {
    return `
        <div class="forecast-slot">
            <span class="text-xs">${time}</span>
            <span class="text-lg">${getWeatherIcon(temp)}</span>
            <span class="text-xs">${Math.round(temp)}°C</span>
        </div>
    `;
}

async function fetchWeatherData() {
    showLoadingState();
    
    try {
        const response = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=27.4745&longitude=94.9110&current_weather=true&hourly=temperature_2m&timezone=Asia/Kolkata&forecast_days=1'
        );
        
        if (!response.ok) {
            throw new Error('Weather data fetch failed');
        }
        
        const data = await response.json();
        updateWeatherDisplay(data);
        
        const widget = document.querySelector('.weather-widget');
        if (widget) {
            widget.classList.add('loaded');
            widget.classList.remove('error');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        showErrorState();
    }
}

function updateWeatherDisplay(data) {
    // Current weather
    const currentTemp = Math.round(data.current_weather.temperature);
    document.getElementById('current-temp').textContent = `${currentTemp}°C`;
    document.getElementById('current-icon').textContent = getWeatherIcon(currentTemp);
    document.getElementById('current-time').textContent = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    // Hourly forecast
    const hourlyForecast = document.getElementById('hourly-forecast');
    const currentHour = new Date().getHours();
    
    hourlyForecast.innerHTML = data.hourly.temperature_2m
        .slice(currentHour + 1, currentHour + 5)
        .map((temp, index) => {
            const forecastTime = new Date();
            forecastTime.setHours(currentHour + index + 1);
            const timeString = forecastTime.toLocaleTimeString('en-US', {
                hour: 'numeric',
                hour12: true
            });
            return createForecastSlot(timeString, temp);
        })
        .join('');
}

function showErrorState() {
    const widget = document.querySelector('.weather-widget');
    if (widget) {
        widget.classList.add('loaded', 'error');
    }
    document.getElementById('current-temp').textContent = 'Error';
    document.getElementById('current-icon').textContent = '⚠️';
}

// Initialize weather widget
document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
    setInterval(fetchWeatherData, WEATHER_UPDATE_INTERVAL);
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dropdown menus to be hidden
    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        menu.classList.add('hidden');
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(10px)';
    });
    
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