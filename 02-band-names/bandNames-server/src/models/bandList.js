import {Band} from "./band.js";

class BandList {
    constructor() {
        this.bands = [
            new Band('Metalica'),
            new Band('Heroes del silencio'),
            new Band('Bon Jovi'),
            new Band('Mago de oz'),
        ]
    }

    addBnad(name){
        const newBand = new Band(name);
        this.bands.push(newBand)
        return this.bands
    }
    remoceBAnd(id){
        this.bands = this.bands.filter(band => band.id !== id);
    }
    getBands(){
        return this.bands
    }
    incrementVotos(id){
        this.bands = this.bands.map(band => {
            if (band.id === id){
                band.voto += 1
            }
            return band
        })
    }

    changeName(id, name){
        this.bands = this.bands.map(band => {
            if (band.id === id){
                band.name = name
            }
            return band
        })
    }

}
export {BandList}
