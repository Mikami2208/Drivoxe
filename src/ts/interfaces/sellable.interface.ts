import { Car } from "../models/Car";


export interface ISellable {
    requestPurchase(email: string, car: Car): Promise<void>
}