import { SingletonUtility } from "../../../spotify-global-utils/SingletonUtility";

export class PlaylistsTabObject {

    private constructor() {}

    static instance(): PlaylistsTabObject {
        SingletonUtility.registerService("PlaylistsTabObject", new PlaylistsTabObject())
        return SingletonUtility.getService("PlaylistsTabObject")
    }

    LBL_CARDTITLES: string = "p[id*='card-title']"
}