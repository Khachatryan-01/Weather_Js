class AirQuality extends Component {
    constructor({ container }) {
        super({ className: "infoContainer", container });

        const data = WeatherManager.getAirQualityInfo();

        this.headline = new Headline({
            text: "Air Quality",
            className: "headline",
            container: this.element
        });

        this.condition = new Text({
            text: `Air quality index is ${data.index} - ${Helper.getAirConditionText(data.index)}`,
            className: "qualityText",
            container: this.element
        });

        this.qualityInfo = new Text({
            text: `CO - ${data.co},  NO2 - ${data.no2}, O3 - ${data.o3}.`,
            className: "qualityText",
            container: this.element
        });

        const gradientLine = new Wrapper({ className: "qualityWrap", container: this.element });
        this.circle = new Wrapper({ className: "circle", container: gradientLine.element });
        this.changeGradientLinePercentage(data.index);
    }


    changeGradientLinePercentage(index) {
        const percentage = (index * 10) - 2;
        this.circle.setStyle({ marginLeft: `${percentage}%` });
    }

    changeInfo(airQuality) {
        this.condition.changeText(`Air quality index is ${airQuality.index} - ${Helper.getAirConditionText(airQuality.index)}`);
        this.qualityInfo.changeText(`CO - ${airQuality.co}  NO2 - ${airQuality.no2} O3 - ${airQuality.o3}.`)
        this.changeGradientLinePercentage(airQuality.index);
    }

}