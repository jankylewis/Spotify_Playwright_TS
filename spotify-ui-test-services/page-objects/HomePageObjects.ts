import { SingletonUtility } from "../../spotify-global-utils/SingletonUtility";

export class HomePageObjects {

    private constructor() {}

    static instance(): HomePageObjects {
        SingletonUtility.registerService("HomePageObjects", new HomePageObjects() )
        return SingletonUtility.getService("HomePageObjects")
    }

    BTN_LOGIN: string = "button[data-testid = 'login-button'][data-encore-id='buttonPrimary']"
}