import {SearchPage} from "./SearchPage";
import {Locator, Page} from "@playwright/test";
import {CommonUIVerifications} from "../../common-actions/CommonUIVerifications";
import {SongsTabObjects} from "../../page-objects/search-objects/SongsTabObjects";

export class SongsTab extends SearchPage {
    readonly page: Page
    private readonly commonUiVerifications: CommonUIVerifications
    private readonly songsTabObjects: SongsTabObjects

    constructor(page: Page) {
        super(page);
    }

    async verifyTrackListContainedSearchKey(searchKey: string): Promise<void> {
        let results: Locator[] =  await this.commonUiActions.getElements(this.songsTabObjects.LBL_TRACKS)
        await this.commonUiVerifications.verifyElementsContainedText(results, searchKey)
    }
}