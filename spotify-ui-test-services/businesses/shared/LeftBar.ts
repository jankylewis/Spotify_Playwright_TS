import { Page } from "@playwright/test"
import { AbstractComponents } from "./AbstractComponents"
import {LeftBarObjects} from "../../page-objects/shared-objects/LeftBarObjects";

export class LeftBar extends AbstractComponents {
    readonly page: Page

    private readonly leftBarObjects: LeftBarObjects = LeftBarObjects.instance()

    constructor(page: Page){
        super(page)
    }

    async clickOnSearchButton(): Promise<void> {
        await this.commonUiActions.click(this.leftBarObjects.BTN_SEARCH)
    }
}