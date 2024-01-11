import {v4} from 'uuid'
class Band {
    constructor(name) {
        this.id = v4()
        this.name = name
        this.voto = 0
    }
}

export {Band}
