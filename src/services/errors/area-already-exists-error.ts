export class AreaAlreadyExistsError extends Error {
    constructor(){
        super("Area already exists")
    }
}