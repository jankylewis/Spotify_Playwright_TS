import { CustomErrors } from "./CustomErrors"
import { ErrorMessages } from "./ErrorMessages"

class SingletonUtility {

    private static _singletons: Map<string, object> = new Map()
    private static singletonError: CustomErrors = new CustomErrors()

    static registerSingleton<C>(preciseClassName: string, preciseClassType: C){

        if (this._singletons.has(preciseClassName))
            throw new this.singletonError.SpotifySingleError(ErrorMessages.SINGLETON_ERROR(preciseClassName))

        this._singletons.set(preciseClassName, preciseClassType as object)
    }

    static getSingleton<C>(preciseClassName: string): C | null {
        return this._singletons.get(preciseClassName) as C | null
    }
}