import {test, expect, Page} from '@playwright/test'

test.describe("Log in tests", () => {

    test("User logged in successfully into Spotify gateway", async ({page}) => {
        // page.click()
    })
})

test.beforeEach(async ({page}) => {
    await page.goto("https://spotify.com/");
})