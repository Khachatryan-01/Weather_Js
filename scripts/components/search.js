class Search extends Component {
    constructor({ container }) {
        super({ container });

        this.icon = new Icon({
            link: "images/search.svg",
            alt: "Search Icon",
            className: "searchIcon",
            container: this.element
        })

        this.input = new Input({
            type: "text",
            placeholder: "Search...",
            container: this.element
        })
    }
}