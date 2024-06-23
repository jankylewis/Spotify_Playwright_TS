import { SingletonUtility } from "../../../spotify-global-utils/SingletonUtility";

export class SongsTabObjects {

    private constructor() {}

    static instance(): SongsTabObjects {
        SingletonUtility.registerService("AllTabObjects", new SongsTabObjects() )
        return SingletonUtility.getService("AllTabObjects")
    }

    LBL_TRACKS: string = "[data-testid='track-list'] a[href] div[data-encore-id='text']"
}