class Input extends Component {
    constructor({ type, placeholder, events, container }) {
        super({
            tagName: "input",
            attributes: {
                type,
                placeholder
            },
            events,
            container
        });
    }
}