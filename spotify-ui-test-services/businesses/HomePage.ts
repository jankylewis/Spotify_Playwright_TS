import { expect, Locator, Page } from "@playwright/test"
import { AbstractPage } from "./AbstractPage"
import { HomePageObjects } from "../page-objects/HomePageObjects"

export class HomePage extends AbstractPage {

    private readonly homePageObjects: any = new HomePageObjects()

    constructor(page: Page) {
        super(page)
    }

    async clickOnLoginButton(locator: Locator) {
        this.commonUiActions.click(locator)
    }
}