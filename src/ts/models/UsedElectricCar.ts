import { IElectricCar } from "../interfaces/electricCar.interface";
import { ISpec } from "../interfaces/spec.interface";
import { IFeature } from "../interfaces/feature.interface";
import { UsedCar } from "./UsedCar";

export class UsedElectricCar extends UsedCar implements IElectricCar{
	private batteryCapacity : number
	private chargeTime : number

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
		mileage : number,
		isRecommended: boolean
	){
		super(id,type, model, price, description, specs, features, imageUrl, mileage, isRecommended)
		this.batteryCapacity = batteryCapacity
		this.chargeTime = chargeTime
	}

	public getBatteryCapacity(): number {
        return this.batteryCapacity
    }

    public getChargeTime(): number {
        return this.chargeTime
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