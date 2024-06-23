import { SingletonUtility } from "../../spotify-global-utils/SingletonUtility";

export class LoginObjects {

    private constructor() {}

    static instance(): LoginObjects {
        SingletonUtility.registerService("LoginObjects", new LoginObjects() )
        return SingletonUtility.getService("LoginObjects")
    }

    TXT_EMAIL: string = "#login-username"
    TXT_PASSWORD: string = "#login-password"
    TG_REMEMBER_ME: string = "#login-remember"
    BTN_LOGIN: string = "#login-button"
}