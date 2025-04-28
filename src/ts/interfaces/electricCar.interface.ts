import { ICar } from "./car.interface";

export interface IElectricCar extends ICar{
    getBatteryCapacity(): number
    getChargeTime(): number
}