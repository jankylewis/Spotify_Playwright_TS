import { SearchPage } from "./SearchPage";
import { Locator, Page } from "@playwright/test";
import { CommonUIVerifications } from "../../common-actions/CommonUIVerifications";
import { PlaylistsTabObject } from "../../page-objects/search-objects/PlaylistsTabObject";

export class PlaylistsTab extends SearchPage {
    readonly page: Page
    private readonly commonUiVerifications: CommonUIVerifications
    private readonly playlistsTabObject: PlaylistsTabObject = PlaylistsTabObject.instance()

    constructor(page: Page) {
        super(page);
    }

    async verifyResultsContainedSearchKey(searchKey: string): Promise<void> {
        let results: Locator[] = await this.commonUiActions.getElements(this.playlistsTabObject.LBL_CARDTITLES)
        await this.commonUiVerifications.verifyElementsContainedText(results, searchKey)
    }
}