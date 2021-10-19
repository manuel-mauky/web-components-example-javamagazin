import {LitElement, html, css} from "lit";

export class ProfileInfoLit extends LitElement {
    static styles = css`
      #user-name {
        font-size: large;
        color: darkgrey;
      }
      #profile-image {
        width: 100px;
        height: 100px;
      }
    `

    static properties = {
        username: { type: String, reflect: true},
        imageUrl: { type: String, reflect: true, attribute: "image-url"}
    }

    username = ""
    imageUrl = ""

    render() {
        return html`<div>
            <p id="user-name">${this.username}</p>
            <img id="profile-image" src=${this.imageUrl} alt="the profile image of the user">
            <div id="description"><slot name="description">Add a description</slot></div>
        </div>`
    }
}
window.customElements.define("profile-info-lit", ProfileInfoLit)
