import { collection, addDoc, getDocs, doc, setDoc, getDoc, query, where } from "firebase/firestore";
import { db } from "./firebase.ts";
import { Car } from "../models/Car";
import { NewCar } from "../models/NewCar.ts";
import { NewElectricCar } from "../models/NewElectricCar.ts";
import { createCarFromData } from "../utils/createCarFromData.ts";

export class FirebaseService {

	static async addCar(car: Car) {
		try {
			const carsCollection = collection(db, "cars")

			const carDocRef = doc(carsCollection, car.getId())

			await setDoc(carDocRef, car.toJSON())
			console.log("Car added to data base with id: ", carDocRef.id)

		} catch (e) {
			console.log("Error adding car: ", e)
		}
	}


	static async getCar(id: string): Promise<Car | null> {
		try {
			const carsRef = doc(db, "cars", id)
			const docSnap = await getDoc(carsRef)

			if (docSnap.exists()) {
				const data = docSnap.data()
				const newCar = createCarFromData(id, data)

				return newCar
			} else {
				console.log("No such car!");
				return null;
			}
		} catch (e) {
			console.error(e)
			return null
		}
	}

	static async addAllCars(cars: Car[]) {
		try {
			const carsCollection = collection(db, "cars")
			cars.forEach(async (car) => {
				const carDocRef = doc(carsCollection, car.getId())
				await setDoc(carDocRef, car.toJSON())
				console.log("Car added to data base with id: ", carDocRef.id)
			})
		} catch (e) {
			console.log(e)
		}
	}

	static async getRecommendedCars(): Promise<Car[] | null> {
		try {
			const q = query(
				collection(db, "cars"),
				where("isRecommended", "==", true)
			)
			const querySnapshot = await getDocs(q)
			const recommendedCars: (NewCar | NewElectricCar)[] = querySnapshot.docs.map(doc => {
				const data = doc.data()

				if (data.type === 'new-car') {
					return new NewCar(
						doc.id,
						data.type,
						data.model,
						data.price,
						data.description,
						data.specs,
						data.features,
						data.imageUrl,
						data.warrantyYears,
						data.isRecommended
					)

				} else if (data.type === "new-electric") {
					return new NewElectricCar(
						doc.id,
						data.type,
						data.model,
						data.price,
						data.description,
						data.specs,
						data.features,
						data.imageUrl,
						data.batteryCapacity,
						data.chargeTime,
						data.warrantyYears,
						data.isRecommended
					)
				}
				return undefined
			}).filter((car): car is NewCar | NewElectricCar => car !== undefined);

			return recommendedCars
		} catch (e) {
			console.log(e)
			return null
		}
	}
}
