class Search extends Component {
    constructor({ container, onSearch }) {
        super({ container });

        this.icon = new Icon({
            link: "images/search.svg",
            alt: "Search Icon",
            className: "searchIcon",
            container: this.element
        });

        this.input = new Input({
            type: "text",
            placeholder: "Search...",
            events: {
                change: (e) => {
                    WeatherManager.search(e.target.value).then(onSearch);
                }
            },
            container: this.element
        })
    }
}