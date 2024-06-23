import { Page } from "@playwright/test"
import { AbstractPage } from "./AbstractPage"
import { HomePageObjects } from "../page-objects/HomePageObjects"

export class HomePage extends AbstractPage {

    private readonly homePageObjects: HomePageObjects = HomePageObjects.instance()

    constructor(page: Page) {
        super(page)
    }

    async clickOnLoginButton() {
        await this.commonUiActions.click(this.homePageObjects.BTN_LOGIN)
    }

    async visitSpotifyHomePage() {
        await this.page.goto("https://spotify.com/")
    }
}