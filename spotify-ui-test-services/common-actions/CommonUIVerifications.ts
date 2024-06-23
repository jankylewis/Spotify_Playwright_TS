import { Page } from "@playwright/test"
import {AbstractUIActions} from "./AbstractUIActions";

export class CommonUIVerifications extends AbstractUIActions{

    constructor(page: Page) {
        super(page)
    }

    async verifyIfElementVisible(expElement: string): Promise<boolean> {
        const actualElement = await this.findElement(expElement)
        return await actualElement.isVisible()
    }
}