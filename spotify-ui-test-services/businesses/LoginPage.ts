import { Page } from "@playwright/test"
import { AbstractPage } from "./AbstractPage"
import { LoginObjects } from "../page-objects/LoginObjects"

export class LoginPage extends AbstractPage {

    private readonly loginObjects: LoginObjects = LoginObjects.instance()

    constructor(page: Page) {
        super(page)
    }

    async doLogin(username: string, password: string, isRemembered: boolean) {

        await this.commonUiActions.sendKeys(this.loginObjects.TXT_EMAIL, username)
        await this.commonUiActions.sendKeys(this.loginObjects.TXT_PASSWORD, password)

        if (isRemembered)
            await this.commonUiActions.click(this.loginObjects.TG_REMEMBER_ME)

        await this.commonUiActions.click(this.loginObjects.BTN_LOGIN)
    }
}