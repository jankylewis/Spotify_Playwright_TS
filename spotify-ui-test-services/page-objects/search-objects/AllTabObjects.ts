import { SingletonUtility } from "../../../spotify-global-utils/SingletonUtility";

export class AllTabObjects {

    private constructor() {}

    static instance(): AllTabObjects {
        SingletonUtility.registerService("AllTabObjects", new AllTabObjects() )
        return SingletonUtility.getService("AllTabObjects")
    }

    LBL_TOPRESULT: string = "[data-testid='top-result-card'] div a[title]"
}