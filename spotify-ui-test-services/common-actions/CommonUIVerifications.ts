import {expect, Locator, Page} from "@playwright/test"
import {AbstractUIActions} from "./AbstractUIActions";

export class CommonUIVerifications extends AbstractUIActions{

    constructor(page: Page) {
        super(page)
    }

    async verifyIfElementVisible(expElement: string): Promise<boolean> {
        const actualElement = await this.findElement(expElement)
        return await actualElement.isVisible()
    }

    async verifyElementsContainedText(elements: Locator[], expText: string): Promise<void> {

        let found: boolean = false;

        for (const element of elements) {

            const elementText: string = await element.innerText();

            if (elementText.includes(expText)){
                found = true;
                break;
            }
        }

        expect(found).toBeTruthy()
    }

    async verifyElementMatchedText(expElement: string, expText: string): Promise<void> {
        const actualElement = await this.findElement(expElement)
        await expect(actualElement).toHaveText(expText)
    }
}