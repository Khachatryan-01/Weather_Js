class WeatherManager {
    static API_PROTOCOL = "http:";
    static API_URL = "//api.weatherapi.com/v1/";
    static FORECAST_URL = "forecast.json";
    static API_KEY = "6a971a31fe874b41a7a203348240901";
    static #location = null;
    static #current = null;
    static #forecast = null;
    static #forecastDays = null;
    static #currentForecast = null;


    constructor() {
        throw new TypeError("This is Static class.")
    }

    static async search(locationName) {
        const recOptions = {
            key: this.API_KEY,
            q: locationName,
            days: 7,
            aqi: "yes",
            alerts: "no"
        }

        const url = `${this.API_PROTOCOL}${this.API_URL}${this.FORECAST_URL}?` + new URLSearchParams(recOptions).toString();

        const response = await fetch(url);
        const data = await response.json();

        this.#location = data.location;
        this.#current = data.current;
        this.#forecast = data.forecast;
        this.#currentForecast = this.#forecast.forecastday[0];
        this.#forecastDays = this.#forecast.forecastday;
    }

    static getCurrentInfo() {
        return {
            name: this.#location.name,
            currTemp: this.#current.temp_c,
            condition: this.#current.condition.text,
            minTemp: this.#currentForecast.day.mintemp_c,
            maxTemp: this.#currentForecast.day.maxtemp_c
        }
    }

    static getTimeLineInfo() {
        const timeLine = [];

        for (const hour of this.#currentForecast.hour) {
            timeLine.push({
                hour: new Date(hour.time),
                icon: `${this.API_PROTOCOL}${hour.condition.icon}`,
                temp: hour.temp_c,
            });
        }

        return timeLine;
    }


    static getForecastDayInfo() {
        const forecastDays = [];

        for (const forecastDay of this.#forecastDays) {
            forecastDays.push({
                day: new Date(forecastDay.date),
                icon: `${this.API_PROTOCOL}${forecastDay.day.condition.icon}`,
                maxTemp: forecastDay.day.maxtemp_c,
                minTemp: forecastDay.day.mintemp_c
            });
        }

        return forecastDays;
    }

    static getAirQualityInfo() {
        return {
            co: this.#current.air_quality.co,
            no2: this.#current.air_quality.no2,
            o3: this.#current.air_quality.o3,
            index: this.#current.air_quality["gb-defra-index"]
        }
    }

    static getWindInfo() {
        return {
            wind: this.#current.wind_kph,
            gust: this.#current.gust_kph,
            degree: this.#current.wind_degree
        }
    }


}