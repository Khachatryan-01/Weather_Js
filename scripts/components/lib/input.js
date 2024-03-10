class Input extends Component {
    constructor({ type, placeholder, container }) {
        super({
            tagName: "input",
            attributes: {
                type,
                placeholder
            },
            container
        });
    }
}