class TextComponent extends Component {
    constructor({ tagName, text, className, attributes, events, container }) {
        super({ tagName, text, className, attributes, events, container });

        if (this.constructor === TextComponent) {
            throw new TypeError("This is Abstract class.");
        }
    }

    changeText(text) {
        this.element.innerText = text;
    }
}