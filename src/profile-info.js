

class ProfileInfo extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <div>
                <p id="user-name"></p>
                <img id="profile-image">
            </div>
        `
        this.update()
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
        const userNameElement = this.querySelector("#user-name")
        if(userNameElement) {
            userNameElement.textContent = this.userName
        }

        const profileImageElement = this.querySelector("#profile-image")
        if(profileImageElement) {
            profileImageElement.src = this.imageUrl
        }
    }
}

window.customElements.define("profile-info", ProfileInfo)
