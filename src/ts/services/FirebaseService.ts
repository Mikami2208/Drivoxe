import { collection, addDoc, getDocs, doc, setDoc, getDoc, query, where, limit, writeBatch } from "firebase/firestore";
import { db } from "./firebase.ts";
import { Car } from "../models/Car";
import { NewCar } from "../models/NewCar.ts";
import { NewElectricCar } from "../models/NewElectricCar.ts";
import { createCarFromData } from "../utils/createCarFromData.ts";


export class FirebaseService {
	static async addCar(car: Car): Promise<void> {
		try {
			const carDocRef = doc(db, "cars", car.getId());
			await setDoc(carDocRef, car.toJSON());
			console.log("Car added to database with id:", carDocRef.id);
		} catch (e) {
			console.error("Error adding car:", e);
		}
	}

	static async getCar(id: string): Promise<Car | null> {
		try {
			const docSnap = await getDoc(doc(db, "cars", id));
			if (!docSnap.exists()) {
				console.warn("No such car!");
				return null;
			}
			const car = createCarFromData(id, docSnap.data());
			return car ?? null;
		} catch (e) {
			console.error("Error fetching car:", e);
			return null;
		}
	}

	static async addAllCars(cars: Car[]): Promise<void> {
		try {
			const batch = writeBatch(db);
			const carsCollection = collection(db, "cars");

			cars.forEach(car => {
				const carDocRef = doc(carsCollection, car.getId());
				batch.set(carDocRef, car.toJSON());
			});

			await batch.commit();
			console.log("All cars added successfully.");
		} catch (e) {
			console.error("Error adding cars batch:", e);
		}
	}

	static async getRecommendedCars(): Promise<Car[] | null> {
		try {
			const q = query(collection(db, "cars"), where("isRecommended", "==", true));
			const querySnapshot = await getDocs(q);

			const recommendedCars: Car[] = querySnapshot.docs
				.map(doc => createCarFromData(doc.id, doc.data()))
				.filter((car): car is Car => Boolean(car));

			return recommendedCars;
		} catch (e) {
			console.error("Error fetching recommended cars:", e);
			return null;
		}
	}

	static async getCarsByType(types: string[]): Promise<Car[] | null> {
		try {
			if (!types.length) return [];

			const q = query(
				collection(db, "cars"),
				where("type", "in", types),
				limit(6)
			);

			const querySnapshot = await getDocs(q);

			const cars: Car[] = querySnapshot.docs
				.map(doc => createCarFromData(doc.id, doc.data()))
				.filter((car): car is Car => Boolean(car));

			return cars;
		} catch (e) {
			console.error("Error fetching cars by type:", e);
			return null;
		}
	}
}
