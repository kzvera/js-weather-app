class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = this.strToTitleCase(weather.weather[0].description);
        this.string.textContent = `${Math.round(weather.main.temp)}°F`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${Math.round(weather.main.feels_like)}°F`;
        this.wind.textContent = `Wind: ${Math.round(weather.wind.speed)} mph`;
    }

    strToTitleCase(string) {
        string = string.toLowerCase().split(' ');

        for (let index = 0; index < string.length; index++) {
            string[index] = string[index].charAt(0).toUpperCase() + string[index].slice(1);
        }

        return string.join(' ');
    }
}