class Text extends TextComponent {
    constructor({ text, className, container }) {
        super({
            tagName: "p",
            text,
            className,
            container
        });
    }
}