class Weather {
    constructor(city, country) {
        this.apiKey = '45d2dae70f45a0d08ca8cdee2cc9788f';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from api
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=imperial`);

        const responseData = await response.json();

        return responseData;

    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}