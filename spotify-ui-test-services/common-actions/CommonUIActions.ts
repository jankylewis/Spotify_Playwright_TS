import { Page, Locator } from "@playwright/test"
import { AbstractUIActions } from "./AbstractUIActions"

export class CommonUIActions extends AbstractUIActions {

    constructor(page: Page) {
        super(page)
    }

    async click(expElement: string): Promise<void> {
        const actualElement: Locator = await this.findElement(expElement)
        await actualElement.click()
    }

    async sendKeys(expElement: string, expKeys: string): Promise<void> {
        const actualElement: Locator = await this.findElement(expElement)
        await actualElement.fill(expKeys)
    }
}