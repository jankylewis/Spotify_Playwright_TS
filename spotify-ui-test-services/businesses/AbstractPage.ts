import { Page } from "@playwright/test"
import { CommonUIActions } from "../common-actions/CommonUIActions"

export abstract class AbstractPage {
    readonly page: Page
    protected commonUiActions: CommonUIActions

    protected constructor(page : Page){
        this.page = page;
        this.commonUiActions = new CommonUIActions(page)
    }
}