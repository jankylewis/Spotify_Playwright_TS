import { Locator, Page } from "@playwright/test"

export abstract class AbstractUIActions {
    readonly page: Page

    protected constructor(page: Page){
        this.page = page
    }

    protected async findElement(expElement: string): Promise<Locator> {
        return this.page.locator(expElement);
    }
}