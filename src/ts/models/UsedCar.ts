import { Car } from "./Car";
import { IFeature } from '../interfaces/feature.interface';
import { ISpec } from '../interfaces/spec.interface';



export class UsedCar extends Car {

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
		mileage : number
	){
		super(id,type, model, price, description, specs, features, imageUrl)
		this.mileage = mileage
	}

	toJSON(): object {
		return{
			...super.toJSON(),
			mileage: this.mileage
		}
	}
}