import { Page } from "@playwright/test"
import { AbstractPage } from "../AbstractPage"
import {SearchObjects} from "../../page-objects/SearchObjects";
import {KeyboardActions} from "../../common-actions/KeyboardActions/KeyboardActions";

export class SearchPage extends AbstractPage {

    private readonly searchObjects: SearchObjects = SearchObjects.instance()

    constructor(page: Page) {
        super(page)
    }

    async doSearching(searchKey: string): Promise<void> {
        await this.commonUiActions.sendKeys(this.searchObjects.TXT_SEARCH, searchKey)
        await new KeyboardActions(this.page).pressEnter()
    }
}