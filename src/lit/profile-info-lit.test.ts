import { expect } from "@esm-bundle/chai"
import {fixture, html, oneEvent} from '@open-wc/testing'

import "./profile-info-lit"

describe("profile-info-lit", () => {
    it("should emit profile-clicked event", async () => {
        const profileInfo = await fixture(html`<profile-info-lit username="luise"></profile-info-lit>`)
        expect(profileInfo).to.be.ok

        // listen for events
        const eventListener = oneEvent(profileInfo, "profile-clicked")

        // get image and click it
        const image = profileInfo.shadowRoot.querySelector("#profile-image")
        expect(image).to.be.ok

        image.dispatchEvent(new MouseEvent("click"))

        // wait for the event and verify it
        const event = await eventListener
        expect(event).to.be.ok
        expect(event.detail).to.deep.equal({
            profile: {
                username: "luise"
            }
        })
    })
})
