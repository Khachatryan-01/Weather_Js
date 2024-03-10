class Icon extends Component {
    constructor({ link, alt, className, container }) {
        super({
            tagName: "img",
            className,
            attributes: {
                src: link,
                alt
            },
            container
        });
    }
}