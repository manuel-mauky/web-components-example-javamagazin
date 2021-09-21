

class ProfileInfo extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML =`
            <style>
                #user-name {
                    font-size: large;
                    color: darkgrey;
                }
                #profile-image {
                    width: 100px;
                    height: 100px;
                }
            </style>
            <div>
                <p id="user-name"></p>
                <img id="profile-image">
            </div>
        `
    }

    static get observedAttributes() {
        return ["username", "image-url"]
    }

    get userName() {
        return this.getAttribute("username")
    }
    set userName(newValue) {
        this.setAttribute("username", newValue)
    }

    get imageUrl() {
        return this.getAttribute("image-url")
    }
    set imageUrl(newValue) {
        this.setAttribute("image-url", newValue)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.update()
    }

    update() {
        this.shadowRoot.querySelector("#user-name").textContent = this.userName
        this.shadowRoot.querySelector("#profile-image").src = this.imageUrl
    }
}

window.customElements.define("profile-info", ProfileInfo)
