export class CustomErrors {

    SpotifySingleError = class extends Error {
        constructor(message: string) {
            super(message);
            this.name = "SpotifySingleError";
        }
    }
}