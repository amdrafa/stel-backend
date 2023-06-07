export class UserPasswordIncorrectError extends Error {
    constructor(){
        super("Informed password does not match with hash.")
    }
}