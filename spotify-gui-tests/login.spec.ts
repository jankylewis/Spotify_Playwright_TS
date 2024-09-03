import { test, Page } from "@playwright/test"
import { HomePage } from "../spotify-ui-test-services/businesses/HomePage"
import { LoginPage } from "../spotify-ui-test-services/businesses/LoginPage"
import { TopBar } from "../spotify-ui-test-services/businesses/shared/TopBar"

test.describe("Login tests", () => {

    //region Introduce variables

    let homePage: HomePage
    let loginPage: LoginPage
    let topBar: TopBar

    //endregion Introduce variables

    test("User logged in successfully into Spotify gateway", async ({page}): Promise<void> => {
        await homePage.clickOnLoginButton()
        await loginPage.doLogin("janautomation.01@gmail.com", "JanAutomation2@", false)
        await topBar.verifyAccountMenuVisible()
    })

    test.beforeEach(async ({page}): Promise<void> => {

        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        topBar = new TopBar(page)

        await homePage.visitSpotifyHomePage()
    })
})