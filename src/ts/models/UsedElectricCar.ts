import { IElectricCar } from "../interfaces/electricCar.interface";
import { Car } from "./Car";
import { ISpec } from "../interfaces/spec.interface";
import { IFeature } from "../interfaces/feature.interface";

export class NewElectricCar extends Car implements IElectricCar{
	public batteryCapacity : number
	public chargeTime : number
	public mileage : number

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
		mileage : number
	){
		super(id,type, model, price, description, specs, features, imageUrl)
		this.batteryCapacity = batteryCapacity
		this.chargeTime = chargeTime
		this.mileage = mileage
	}

	public getBatteryCapacity(): number {
        return this.batteryCapacity
    }

    public getChargeTime(): number {
        return this.chargeTime
    }

	public getMileage(): number{
		return this.mileage
	}

	toJSON(): object {
		return{
			...super.toJSON(),
			batteryCapacity : this.batteryCapacity,
			chargeTime : this.chargeTime,
			mileage: this.mileage
		}
	}
}