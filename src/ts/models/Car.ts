import { ICar } from '../interfaces/car.interface';
import { IFeature } from '../interfaces/feature.interface';
import { ISpec } from '../interfaces/spec.interface';


export class Car implements ICar {
     public id : string
     public model : string
     public price : number
     public description : string
     public specs : ISpec[]
     public features : IFeature[]
     public imageUrl : string

    constructor(
        id : string,
        model : string,
        price : number,
        description : string,
        specs : ISpec[],
        features : IFeature[],
        imageUrl : string
    ){
        this.id = id
        this.model = model
        this.price = price
        this.description = description
        this.specs = specs
        this.features = features
        this.imageUrl = imageUrl
    }

    toJSON(): object {
        return{
            id: this.id,
            model : this.model,
            price: this.price,
            description : this.description,
            specs : this.specs,
            features:this.features,
            imageUrl : this.imageUrl
        }
    }
}