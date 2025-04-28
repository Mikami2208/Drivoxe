import { IFeature } from "./feature.interface"
import { ISpec } from "./spec.interface"

export interface ICar {
    getId(): string
    getType(): string
    getModel(): string
    getPrice(): number
    getDescription(): string
    getSpecs(): ISpec[]
    getFeatures(): IFeature[]
    getImageUrl(): string[]
    toJSON() : object
    isRecommended?: boolean
}