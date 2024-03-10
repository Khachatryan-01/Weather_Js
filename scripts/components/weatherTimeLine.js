class WeatherTimeLine extends Component {
    constructor({ container }) {
        super({ className: "infoContainer", container });

        this.timeLineData = WeatherManager.getTimeLineInfo();

        for (let i = 12; i < 24; i++) {

            new WeatherTimeLineItem({
                time: this.timeLineData[i].hour.split(" ")[1],
                icon: this.timeLineData[i].icon,
                temp: `${this.timeLineData[i].temp}°`,
                container: this.element
            });
        }
    }
}