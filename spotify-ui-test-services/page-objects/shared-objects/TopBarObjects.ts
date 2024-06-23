import { SingletonUtility } from "../../../spotify-global-utils/SingletonUtility";

export class TopBarObjects {

    private constructor() {}

    static instance(): TopBarObjects {
        SingletonUtility.registerService("TopBarObjects", new TopBarObjects())
        return SingletonUtility.getService("TopBarObjects")
    }

    BTN_ACCOUNTMENU: string = "header [data-encore-id='buttonTertiary'][data-testid]"
}