class ForecastDaysWeather extends Component {
    constructor({ container }) {
        super({ className: "infoContainer", container });

        for (let i = 0; i < 7; i++) {
            new ForecastDaysWeatherItem({
                day: i + 1,
                icon: "https://cdn-icons-png.flaticon.com/128/979/979585.png",
                range: `${i + 10} ----- ${i + 15}`,
                container: this.element
            });
        }
    }
}