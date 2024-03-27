class ForecastWeather extends Component {
    constructor({ container }) {
        super({ container });

        this.forecastDays = new ForecastDaysWeather({ container: this.element });


        this.airQualityAndWind = new AirQualityAndWind({ container: this.element });
    }

    changeInfo({ forecast, airQuality, windInfo }) {
        this.forecastDays.changeInfo(forecast);
        this.airQualityAndWind.changeInfo({ airQuality, windInfo })
    }
}