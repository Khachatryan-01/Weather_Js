class Headline extends Component {
    constructor({ text, className, container }) {
        super({
            tagName: "h2",
            text,
            className,
            container
        });
    }
}