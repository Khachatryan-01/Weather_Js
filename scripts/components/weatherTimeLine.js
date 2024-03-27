class WeatherTimeLine extends Component {
    constructor({ container }) {
        super({ className: "infoContainer", container });

        this.timeLineData = WeatherManager.getTimeLineInfo();

        

        this.timeLineArray = [];

        for (let i = 12; i < this.timeLineData.length; i++) {
            
            const hour = this.timeLineData[i].hour.getHours().toString().padStart(2, "0");
            const minute = this.timeLineData[i].hour.getMinutes().toString().padStart(2, "0");

            const timeLineItem = new WeatherTimeLineItem({
                time: `${hour}:${minute}`,
                icon: this.timeLineData[i].icon,
                temp: `${this.timeLineData[i].temp}°`,
                container: this.element
            });

            this.timeLineArray.push(timeLineItem);
        }
    }

    changeInfo(info) {

        for (let i = 0; i < this.timeLineArray.length; i++) {
            const infoIndex = i + (info.length - this.timeLineArray.length);
            const date = info[infoIndex].hour;
            const hour = date.getHours().toString().padStart(2, "0");
            const minutes = date.getMinutes().toString().padStart(2, "0");


            this.timeLineArray[i].changeInfo({
                time: `${hour}:${minutes}`,
                icon: info[infoIndex].icon,
                temp: `${info[infoIndex].temp}°`
            });
        }

    }
}