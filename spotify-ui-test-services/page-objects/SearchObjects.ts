import { SingletonUtility } from "../../spotify-global-utils/SingletonUtility";

export class SearchObjects {

    private constructor() {}

    static instance(): SearchObjects {
        SingletonUtility.registerService("SearchObjects", new SearchObjects() )
        return SingletonUtility.getService("SearchObjects")
    }

    TXT_SEARCH: string = "header input[data-testid='search-input']"
}