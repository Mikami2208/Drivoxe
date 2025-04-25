import { IFeature } from "./feature.interface"
import { ISpec } from "./spec.interface"

export interface ICar {
    id: string
    model : string
    price : number
    description : string
    specs: ISpec[]
    features : IFeature[]
    imageUrl? : string
    toJSON() : object
}