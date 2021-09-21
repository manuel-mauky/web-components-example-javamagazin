

class ProfileInfo extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <div>
                <p id="user-name"></p>
                <img id="profile-image">
            </div>
        `
    }
}

window.customElements.define("profile-info", ProfileInfo)
