class Wind extends Component {
    constructor({ container }) {
        super({ className: "infoContainer", container });

        const data = WeatherManager.getWindInfo();

        const windWrap = new Wrapper({ className: "windWrap", container: this.element });

        new Headline({
            text: "Wind",
            className: "windHeadline",
            container: windWrap.element
        });

        const windWrapInfo = new Wrapper({ className: "windWrapInfo", container: windWrap.element });

        const windBox1 = new Wrapper({ className: "windBox1", container: windWrapInfo.element });
        this.windSpeed = new Text({ text: data.wind, className: "windkph", container: windBox1.element });

        const windBox2 = new Wrapper({ className: "windBox2", container: windWrapInfo.element });
        this.windKphText1 = new Text({ text: "KM/H", container: windBox2.element });
        this.windKphText2 = new Text({ text: "Wind", container: windBox2.element });

        const gustsWrapInfo = new Wrapper({ className: "windWrapInfo", container: windWrap.element });

        const gustsBox1 = new Wrapper({ className: "windBox1", container: gustsWrapInfo.element });
        this.gustsSpeed = new Text({ text: data.gust, className: "windkph", container: gustsBox1.element });

        const gustsBox2 = new Wrapper({ className: "windBox2", container: gustsWrapInfo.element });
        this.gustsKphText1 = new Text({ text: "KM/H", container: gustsBox2.element });
        this.gustsKphText2 = new Text({ text: "Gusts", container: gustsBox2.element });

        const compas = new Wrapper({ className: "compas", container: this.element });

        this.compasBackground = new Icon({
            className: "compasBackground",
            link: "./images/Layer_1.png",
            container: compas.element
        });

        this.compasArrow = new Icon({
            className: "compasArrow",
            link: "./images/Layer_2.png",
            container: compas.element
        });

        this.rotateArrow(data.degree);
    }

    rotateArrow(degree) {
        this.compasArrow.setStyle({ transform: `rotate(${degree}deg)` });
    }

    changeInfo({ wind, gust, degree }) {
        this.windSpeed.changeText(wind);
        this.gustsSpeed.changeText(gust);

        this.rotateArrow(degree);
    }
}