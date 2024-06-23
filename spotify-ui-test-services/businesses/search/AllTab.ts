import { SearchPage } from "./SearchPage";
import { Page } from "@playwright/test";
import { CommonUIVerifications } from "../../common-actions/CommonUIVerifications";
import { AllTabObjects } from "../../page-objects/search-objects/AllTabObjects";

export class AllTab extends SearchPage {

    readonly page: Page
    private readonly commonUiVerifications: CommonUIVerifications
    private readonly allTabObjects: AllTabObjects = AllTabObjects.instance()

    constructor(page: Page) {
        super(page);
    }

    async verifyTopResultListedSearchKey(searchKey: string): Promise<void> {
        await this.commonUiVerifications.verifyElementMatchedText(this.allTabObjects.LBL_TOPRESULT, searchKey)
    }
}