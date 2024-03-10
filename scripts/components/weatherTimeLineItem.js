class WeatherTimeLineItem extends Component {
    constructor({ time, icon, temp, container }) {
        super({ container });

        this.time = new Text({ text: time, container: this.element });
        this.icon = new Icon({ link: icon, container: this.element });
        this.temp = new Text({ text: temp, container: this.element });
    }
}