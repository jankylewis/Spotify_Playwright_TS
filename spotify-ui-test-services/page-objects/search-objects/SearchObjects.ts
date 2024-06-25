import { SingletonUtility } from "../../../spotify-global-utils/SingletonUtility";

export class SearchObjects {

    private constructor() {}

    static instance(): SearchObjects {
        SingletonUtility.registerService("SearchObjects", new SearchObjects() )
        return SingletonUtility.getService("SearchObjects")
    }

    TXT_SEARCH: string = "header input[data-testid='tabs-input']"
    LBL_RESULTS: string = "#searchPage div[data-encore-id='card']"

    BTN_SEARCHTABS(expTab: string): string{
        return `//div[@role='list']//a//button[@data-encore-id="chip"]//span[contains(text(), '${expTab}')]`
    }
}