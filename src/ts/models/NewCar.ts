import { Car } from "./Car";
import { IFeature } from '../interfaces/feature.interface';
import { ISpec } from '../interfaces/spec.interface';

export class NewCar extends Car{
	public warrantyYears : number

	constructor(
		id : string,
		type: string,
        model : string,
        price : number,
        description : string,
        specs : ISpec[],
        features : IFeature[],
        imageUrl : string[],
		warrantyYears : number,
		isRecommended: boolean
		
	){
		super(id, type, model, price, description, specs, features, imageUrl, isRecommended)
		this.warrantyYears = warrantyYears
	}

	public getWarrantyYears(): number{
		return this.warrantyYears
	}

	toJSON(): object {
		return{
			...super.toJSON(),
			warrantyYears: this.warrantyYears,
		}
	}
}
