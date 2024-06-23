import { Page } from "@playwright/test"
import { CommonUIActions } from "../../common-actions/CommonUIActions"
import { CommonUIVerifications } from "../../common-actions/CommonUIVerifications"

export abstract class AbstractComponents {
    readonly page: Page
    protected commonUiActions: CommonUIActions
    protected commonUiVerifications: CommonUIVerifications

    protected constructor(page: Page){
        this.page = page
        this.commonUiActions = new CommonUIActions(page)
        this.commonUiVerifications = new CommonUIVerifications(page)
    }
}