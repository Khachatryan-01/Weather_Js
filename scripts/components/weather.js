class Weather extends Component {
    constructor({ container }) {
        super({ container });

        this.searchContainer = new Wrapper({ className: "searchContainer", container: this.element })
        this.search = new Search({
            onSearch: () => {
                this.todaysWeather.changeInfo(WeatherManager.getCurrentInfo());
                this.timeLine.changeInfo(WeatherManager.getTimeLineInfo());
                this.forecastWeather.changeInfo({
                    forecast: WeatherManager.getForecastDayInfo(),
                    airQuality: WeatherManager.getAirQualityInfo(),
                    windInfo: WeatherManager.getWindInfo()
                });
            },
            container: this.searchContainer.element
        });

        this.todaysWeather = new TodaysWeather({ container: this.element });

        this.timeLineContainer = new Wrapper({ className: "weatherTimeLineContainer", container: this.element });
        this.timeLine = new WeatherTimeLine({ container: this.timeLineContainer.element });

        this.forecastWeatherContainer = new Wrapper({ className: "forecastWeatherContainer", container: this.element });
        this.forecastWeather = new ForecastWeather({ container: this.forecastWeatherContainer.element });
    }
}