import { SingletonUtility } from "../../../spotify-global-utils/SingletonUtility";

export class LeftBarObjects {

    private constructor() {}

    static instance(): LeftBarObjects {
        SingletonUtility.registerService("LeftBarObjects", new LeftBarObjects())
        return SingletonUtility.getService("LeftBarObjects")
    }

    BTN_SEARCH: string = "#Desktop_LeftSidebar_Id a[aria-label='Search']"
}