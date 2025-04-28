import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase.ts";
import { Car } from "../models/Car";

export class FirebaseService{

	static async addCar(car: Car){
		try{
			const docRef = await addDoc(collection(db, 'cars'), car.toJSON())
			console.log("Car added to data base with id: ", docRef.id)

		}catch(e)
		{
			console.log("Error adding car: ", e)
		}
	}
}