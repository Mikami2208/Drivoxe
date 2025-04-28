import { ICar } from '../interfaces/car.interface';
import { IFeature } from '../interfaces/feature.interface';
import { ISpec } from '../interfaces/spec.interface';


export class Car implements ICar {
     private id : string
     private type: string
     private model : string
     private price : number
     private description : string
     private specs : ISpec[]
     private features : IFeature[]
     private imageUrl : string[]
     public isRecommended?: boolean;

    constructor(
        id : string,
        type: string,
        model : string,
        price : number,
        description : string,
        specs : ISpec[],
        features : IFeature[],
        imageUrl : string[],
        isRecommended?: boolean
    ){
        this.id = id
        this.type = type
        this.model = model
        this.price = price
        this.description = description
        this.specs = specs
        this.features = features
        this.imageUrl = imageUrl
        this.isRecommended = isRecommended
    }

    public getId(): string {
        return this.id;
    }

    public getType(): string{
        return this.type
    }

    public getModel(): string {
        return this.model;
    }

    public getPrice(): number {
        return this.price;
    }

    public getDescription(): string {
        return this.description;
    }

    public getSpecs(): ISpec[] {
        return this.specs;
    }

    public getFeatures(): IFeature[] {
        return this.features;
    }

    public getImageUrl(): string[] {
        return this.imageUrl;
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