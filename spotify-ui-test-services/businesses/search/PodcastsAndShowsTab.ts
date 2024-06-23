import {SearchPage} from "./SearchPage";
import {Locator, Page} from "@playwright/test";
import {CommonUIVerifications} from "../../common-actions/CommonUIVerifications";

export class PodcastsAndShowsTab extends SearchPage {
    readonly page: Page
    private readonly commonUiVerifications: CommonUIVerifications

    constructor(page: Page) {
        super(page);
    }

    async verifyResultsContainedSearchKey(searchKey: string): Promise<void> {
        let results: Locator[] =  await this.commonUiActions.getElements(this.searchObjects.LBL_RESULTS)
        await this.commonUiVerifications.verifyElementsContainedText(results, searchKey)
    }
}