class ForecastWeather extends Component {
    constructor({ container }) {
        super({ container });

        this.daysWeather = new ForecastDaysWeather({ container: this.element });
        new Wrapper({ className: "airQualityAndWind", container: this.element })
        new Wrapper({ className: "precipitation", container: this.element });
    }
}