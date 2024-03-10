class Text extends Component {
    constructor({ text, className, container }) {
        super({
            tagName: "p",
            text,
            className,
            container
        });
    }
}