class ForecastDaysWeather extends Component {
    constructor({ container }) {
        super({ className: "infoContainer", container });

        this.forecastDays = [];

        const data = WeatherManager.getForecastDayInfo();

        for (let i = 0; i < data.length; i++) {
            const forecastDay = new ForecastDaysWeatherItem({
                day: Helper.getWeekDay(data[i].day),
                icon: data[i].icon,
                range: `${data[i].minTemp}° ------- ${data[i].maxTemp}°`,
                container: this.element
            });

            this.forecastDays.push(forecastDay);
        }
    }

    changeInfo(forecastDaysInfo) {
        for (let i = 0; i < this.forecastDays.length; i++) {
            this.forecastDays[i].cahngeInfo({
                day: Helper.getWeekDay(forecastDaysInfo[i].day),
                icon: forecastDaysInfo[i].icon,
                range: `${forecastDaysInfo[i].minTemp}° ------- ${forecastDaysInfo[i].maxTemp}°`
            });
        }
    }
}