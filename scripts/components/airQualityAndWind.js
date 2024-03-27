class AirQualityAndWind extends Component {
    constructor({ container }) {
        super({ container })

        this.airQuality = new AirQuality({ container: this.element });
        this.wind = new Wind({ container: this.element });
    }

    changeInfo({ airQuality, windInfo }) {
        this.airQuality.changeInfo(airQuality);
        this.wind.changeInfo(windInfo)
    }
}