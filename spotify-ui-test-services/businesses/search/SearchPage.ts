import { Page } from "@playwright/test"
import { AbstractPage } from "../AbstractPage"
import {SearchObjects} from "../../page-objects/search-objects/SearchObjects";
import {KeyboardActions} from "../../common-actions/keyboard-actions/KeyboardActions";

export class SearchPage extends AbstractPage {

    protected readonly searchObjects: SearchObjects = SearchObjects.instance()

    constructor(page: Page) {
        super(page)
    }

    async doSearching(searchKey: string): Promise<void> {
        await this.commonUiActions.sendKeys(this.searchObjects.TXT_SEARCH, searchKey)
        await new KeyboardActions(this.page).pressEnter()
    }

    async landOnTab(expTab: string): Promise<void> {
        await this.commonUiActions.click(this.searchObjects.BTN_SEARCHTABS(expTab))
    }
}