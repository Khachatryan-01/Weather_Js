class Headline extends TextComponent {
    constructor({ text, className, container }) {
        super({
            tagName: "h2",
            text,
            className,
            container
        });
    }
}