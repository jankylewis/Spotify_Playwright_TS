import { SingletonUtility } from "../../../spotify-global-utils/SingletonUtility";

export class SongsTabObjects {

    private constructor() {}

    static instance(): SongsTabObjects {
        SingletonUtility.registerService("SongsTabObjects", new SongsTabObjects() )
        return SingletonUtility.getService("SongsTabObjects")
    }

    LBL_TRACKS: string = "[data-testid='track-list'] a[href] div[data-encore-id='text']"
}