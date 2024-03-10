class TodaysWeather extends Component {
    constructor({ container }) {
        super({ container });

        this.currentInfo = WeatherManager.getCurrentInfo();

        this.headline = new Headline({
            text: this.currentInfo.name,
            container: this.element
        });

        this.temperature = new Text({
            text: `${this.currentInfo.currTemp}°`,
            className: "weatherTemperature",
            container: this.element
        });

        this.condition = new Text({
            text: this.currentInfo.condition,
            className: "weatherCondition",
            container: this.element
        });

        this.temperatureRange = new Text({
            text: `L: ${this.currentInfo.minTemp}°  H: ${this.currentInfo.maxTemp}°`,
            className: "weatherTemperatureRange",
            container: this.element
        });

    }
}