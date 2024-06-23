import {Page} from "@playwright/test";
import {KeyboardConstants} from "./KeyboardConstants";

export class KeyboardActions {
    readonly page: Page
    private readonly keyboardConstants: KeyboardConstants

    constructor(page: Page) {
        this.page = page
        this.keyboardConstants = new KeyboardConstants()
    }

    async pressEnter(): Promise<void> {
        await this.page.keyboard.press(this.keyboardConstants.ENTER)
    }
}