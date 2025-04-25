
import { IElectricCar } from "../interfaces/electricCar.interface";
import { Car } from "./Car";
import { ISpec } from "../interfaces/spec.interface";
import { IFeature } from "../interfaces/feature.interface";

export class ElectricCar extends Car implements IElectricCar{
    public batteryCapacity : number
    public chargeTime : number

    constructor(
        id : string,
        model : string,
        price : number,
        description : string,
        specs : ISpec[],
        features : IFeature[],
        imageUrl : string,
        batteryCapacity : number,
        chargeTime: number
    ){
        super(id, model, price, description, specs, features, imageUrl)
        this.batteryCapacity = batteryCapacity
        this.chargeTime = chargeTime
    }

    toJSON(): object {
        return{
            ...super.toJSON(),
            batteryCapacity : this.batteryCapacity,
            chargeTime : this.chargeTime
        }
    }
}