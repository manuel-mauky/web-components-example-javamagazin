import {LitElement, html, css,} from "lit";
import {customElement, property} from '@lit/reactive-element/decorators.js';

@customElement("profile-info-lit")
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

    @property({ type: String, reflect: true})
    username: string = ""

    @property({ type: String, reflect: true, attribute: "image-url"})
    imageUrl:string = ""

    private handleImageClicked() {
        this.dispatchEvent(new CustomEvent("profile-clicked", {
            bubbles: true,
            composed: true,
            cancelable: false,
            detail: {
                profile: {
                    username: this.username
                }
            }
        }))
    }

    render() {
        return html`<div>
            <p id="user-name">${this.username}</p>
            <img @click=${this.handleImageClicked} id="profile-image" src=${this.imageUrl} alt="the profile image of the user">
            <div id="description"><slot name="description">Add a description</slot></div>
        </div>`
    }
}
