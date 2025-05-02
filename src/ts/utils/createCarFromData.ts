import { Car } from "../models/Car";
import { NewCar } from "../models/NewCar";
import { NewElectricCar } from "../models/NewElectricCar";
import { UsedCar } from "../models/UsedCar";
import { UsedElectricCar } from "../models/UsedElectricCar";


export function createCarFromData(id: string, data: any): Car {
    switch(data.type){
        case 'new-car': 
            return new NewCar(id, data.type, data.model, data.price, data.description, data.specs, data.features, data.imageUrl, data.warrantyYears, data.isRecommended)
        case 'new-electric': 
            return new NewElectricCar(id, data.type, data.model, data.price, data.description, data.specs, data.features, data.imageUrl, data.batteryCapacity, data.chargeTime, data.warrantyYears, data.isRecommended)
        case 'used-car': 
            return new UsedCar(id, data.type, data.model, data.price, data.description, data.specs, data.features, data.imageUrl, data.mileage, data.isRecommended)
        case 'used-electric': 
            return new UsedElectricCar(id, data.type, data.model, data.price, data.description, data.specs, data.features, data.imageUrl, data.batteryCapacity, data.chargeTime, data.mileage, data.isRecommended)
        default: 
            return new Car(id, data.type, data.model, data.price, data.description, data.specs, data.features, data.imageUrl, data.isRecommended)
        }

}