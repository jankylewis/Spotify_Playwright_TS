import { Page } from "@playwright/test"
import { TopBarObjects } from "../../page-objects/shared-objects/TopBarObjects"
import { AbstractComponents } from "./AbstractComponents"

export class TopBar extends AbstractComponents {
    readonly page: Page

    private readonly topBarObjects: TopBarObjects = TopBarObjects.instance()

    constructor(page: Page){
        super(page)
    }

    async verifyAccountMenuVisible(){
        await this.commonUiVerifications.verifyIfElementVisible(this.topBarObjects.BTN_ACCOUNTMENU)
    }
}