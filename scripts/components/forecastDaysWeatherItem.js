class ForecastDaysWeatherItem extends Component {
    constructor({ day, icon, range, container }) {
        super({ container });

        this.dayWrapper = new Wrapper({ container: this.element });
        this.day = new Text({ text: day, container: this.dayWrapper.element });

        this.iconWrapper = new Wrapper({ container: this.element });
        this.icon = new Icon({ link: icon, container: this.iconWrapper.element });

        this.rangeWrapper = new Wrapper({ container: this.element });
        this.range = new Text({ text: range, container: this.rangeWrapper.element });
    }

    cahngeInfo({day, icon, range}) {
        this.day.changeText(day); 
        this.icon.element.src = icon; 
        this.range.changeText(range); 
    }
}