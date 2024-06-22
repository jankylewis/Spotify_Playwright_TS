export class ErrorMessages {

    static SINGLETON_ERROR = function (className: string): string {
        return `The single instance of the {className} has been registered!`
    }
}