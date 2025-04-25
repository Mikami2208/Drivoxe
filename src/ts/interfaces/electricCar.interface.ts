import { ICar } from "./car.interface";

export interface IElectricCar extends ICar{
    batteryCapacity : number
    chargeTime : number
}