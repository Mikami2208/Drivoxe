import { Car } from "../models/Car";
import { NewCar } from "../models/NewCar";
import { NewElectricCar } from "../models/NewElectricCar";


export function createCarFromData(id: string, data: any): Car {
    switch(data.type){
        case 'new-car': 
            return new NewCar(data.id, data.type, data.model, data.price, data.description, data.specs, data.features, data.imageUrl, data.warrantyYears, data.isRecommended)
        case 'new-electric': 
            return new NewElectricCar(data.id, data.type, data.model, data.price, data.description, data.specs, data.features, data.imageUrl, data.batteryCapacity, data.chargeTime, data.warrantyYears)
        default: 
        return new Car(data.id, data.type, data.model, data.price, data.description, data.specs, data.features, data.imageUrl, data.isRecommended)
        }

}