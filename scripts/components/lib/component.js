class Component {
    constructor({ tagName, text, className, attributes, events, container }) {

        if (this.constructor === Component) {
            throw new TypeError("This is Abstract class.");
        }

        this.element = document.createElement(tagName || this.constructor.name);

        if (text) {
            this.element.innerText = text;
        }

        if (className) {
            if (typeof className === "string") {
                className = [className];
            }

            if (Array.isArray(className)) {

                for (let i = 0; i < className.length; i++) {

                    if (typeof className[i] !== "string") {
                        throw new TypeError("The className must be String.");
                    }

                    this.element.classList.add(className[i]);
                }
            }
            else {
                throw new TypeError("The className must be String or Array.");
            }
        }

        if (typeof attributes === "object" && !Array.isArray(attributes)) {
            for (const attr in attributes) {
                if (attributes[attr] !== undefined) {
                    this.element.setAttribute(attr, attributes[attr]);
                }
            }
        }

        if (typeof events === "object" && !Array.isArray(events)) {
            for (const eventName in events) {
                this.element.addEventListener(eventName, events[eventName]);
            }
        }

        container.append(this.element);
    }

    setStyle(styles) {
        
        if (typeof styles === "object" && !Array.isArray(styles)) {
            for (const styleName in styles) {
                this.element.style[styleName] = styles[styleName];
            }
        }

    }
}