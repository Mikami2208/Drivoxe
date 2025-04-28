
import { IElectricCar } from "../interfaces/electricCar.interface";
import { Car } from "./Car";
import { ISpec } from "../interfaces/spec.interface";
import { IFeature } from "../interfaces/feature.interface";

export class NewElectricCar extends Car implements IElectricCar{
    private batteryCapacity : number
    private chargeTime : number
    private warrantyYears : number

    constructor(
        id : string,
        type: string,
        model : string,
        price : number,
        description : string,
        specs : ISpec[],
        features : IFeature[],
        imageUrl : string[],
        batteryCapacity : number,
        chargeTime: number,
        warrantyYears : number,
        isRecommended?: boolean
    ){
        super(id,type, model, price, description, specs, features, imageUrl, isRecommended)
        this.batteryCapacity = batteryCapacity
        this.chargeTime = chargeTime
        this.warrantyYears = warrantyYears
    }

    public getBatteryCapacity(): number {
        return this.batteryCapacity
    }

    public getChargeTime(): number {
        return this.chargeTime
    }

    public getWarrantyYears(): number{
        return this.warrantyYears
    }

    toJSON(): object {
        return{
            ...super.toJSON(),
            batteryCapacity : this.batteryCapacity,
            chargeTime : this.chargeTime,
            warrantyYears: this.warrantyYears
        }
    }
}