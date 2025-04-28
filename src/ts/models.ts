import { NewCar } from "./models/NewCar";

export const carsArray = [
new NewCar(
    "bmw-001",                        // id
    "NewCar",                          // type
    "BMW X5",                          // model
    80000,                             // price
    "The BMW X5 is an iconic luxury SUV with modern technology and great performance.",  // description
    [                                  // specs
        { key: "Engine", value: "3.0L Inline-6" },
        { key: "Horsepower", value: "335 HP" },
        { key: "Torque", value: "330 lb-ft" }
    ],
    [                                  // features
        { title: "Panoramic Sunroof", description: "A large glass sunroof with a great view." },
        { title: "Heated Seats", description: "Comfortable heated seats for cold weather." },
		{ title: "Panoramic Sunroof", description: "A large glass sunroof with a great view." },
        { title: "Heated Seats", description: "Comfortable heated seats for cold weather." }
    ],
    ["./assets/main/cars/Photo2.png"],  // imageUrls
    5,                                  // warrantyYears
    true                                // isRecommended (optional)
)]
