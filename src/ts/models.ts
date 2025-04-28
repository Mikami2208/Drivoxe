import { NewCar } from "./models/NewCar";
import { NewElectricCar } from "./models/NewElectricCar";

export const newCarsArray = [
    new NewCar(
        "bmw-001",
        "new-car",
        "BMW X5",
        80000,
        "The BMW X5 is an iconic luxury SUV with modern technology and great performance.",
        [
            { key: "Type", value: "SUV" },
            { key: "Engine", value: "3.0L Inline-6" },
            { key: "Horsepower", value: "335 HP" },
            { key: "Transmission", value: "8-Speed Automatic" },
            { key: "Seating", value: "5 seats" }
        ],
        [
            { title: "Panoramic Sunroof", description: "A large glass sunroof with a great view." },
            { title: "Heated Seats", description: "Comfortable heated seats for cold weather." },
            { title: "Adaptive Cruise Control", description: "Automatically adjusts speed to maintain distance." },
            { title: "Wireless Charging", description: "Charge your devices without cables." }
        ],
        ["./assets/main/cars/Photo1.png"],
        5,
        true
    ),
    new NewCar(
        "audi-001",
        "new-car",
        "Audi Q7",
        75000,
        "Audi Q7 is a luxury midsize SUV with plenty of space, technology, and performance.",
        [
            { key: "Type", value: "SUV" },
            { key: "Engine", value: "3.0L V6 Turbo" },
            { key: "Horsepower", value: "335 HP" },
            { key: "Transmission", value: "8-Speed Automatic" },
            { key: "Seating", value: "7 seats" }
        ],
        [
            { title: "Virtual Cockpit", description: "High-resolution digital instrument cluster." },
            { title: "Matrix LED Headlights", description: "Smart adaptive lighting technology." },
            { title: "Bang & Olufsen Sound", description: "Premium audio system." },
            { title: "4-Zone Climate Control", description: "Individual temperature settings for passengers." }
        ],
        ["./assets/main/cars/Photo3.png"],
        5,
        true
    ),
    new NewCar(
        "mercedes-001",
        "new-car",
        "Mercedes-Benz E-Class",
        70000,
        "The Mercedes-Benz E-Class is the epitome of luxury, comfort, and cutting-edge driving technology.",
        [
            { key: "Type", value: "Sedan" },
            { key: "Engine", value: "2.0L I4 Turbo" },
            { key: "Horsepower", value: "255 HP" },
            { key: "Transmission", value: "9-Speed Automatic" },
            { key: "Seating", value: "5 seats" }
        ],
        [
            { title: "MBUX System", description: "Intelligent voice-controlled infotainment." },
            { title: "Multicontour Seats", description: "Massage seats for maximum comfort." },
            { title: "Parking Package", description: "360° camera with active parking assist." },
            { title: "Keyless-Go", description: "Hands-free access to your car." }
        ],
        ["./assets/main/cars/Photo4.png"],
        4,
        true
    ),
    new NewCar(
        "honda-001",
        "new-car",
        "Honda Accord",
        32000,
        "The Honda Accord offers reliability, efficiency, and sporty driving experience.",
        [
            { key: "Type", value: "Sedan" },
            { key: "Engine", value: "1.5L Turbo I4" },
            { key: "Horsepower", value: "192 HP" },
            { key: "Transmission", value: "CVT" },
            { key: "Seating", value: "5 seats" }
        ],
        [
            { title: "Honda Sensing", description: "Advanced driver assistance suite." },
            { title: "Dual-Zone Climate Control", description: "Individual settings for driver and passenger." },
            { title: "Remote Engine Start", description: "Start your car remotely." },
            { title: "Apple CarPlay & Android Auto", description: "Connect your phone easily." }
        ],
        ["./assets/main/cars/Photo6.png"],
        3,
        true
    ),
    new NewCar(
        "ford-001",
        "new-car",
        "Ford Mustang Mach-E",
        60000,
        "The Ford Mustang Mach-E is a stylish, sporty electric SUV redefining Ford’s legacy.",
        [
            { key: "Type", value: "SUV" },
            { key: "Engine", value: "Electric Motor" },
            { key: "Horsepower", value: "346 HP" },
            { key: "Transmission", value: "Single-Speed" },
            { key: "Seating", value: "5 seats" }
        ],
        [
            { title: "Panoramic Fixed-Glass Roof", description: "Expansive overhead view." },
            { title: "Ford Co-Pilot360", description: "Driver-assist features for safety." },
            { title: "Hands-Free Liftgate", description: "Easy trunk access." },
            { title: "Wireless Charging Pad", description: "No more cables needed." }
        ],
        ["./assets/main/cars/Photo7.png"],
        4,
        false
    ),
    new NewCar(
        "kia-001",
        "new-car",
        "Kia Telluride",
        45000,
        "Kia Telluride is a bold, spacious SUV built for families and adventures.",
        [
            { key: "Type", value: "SUV" },
            { key: "Engine", value: "3.8L V6" },
            { key: "Horsepower", value: "291 HP" },
            { key: "Transmission", value: "8-Speed Automatic" },
            { key: "Seating", value: "8 seats" }
        ],
        [
            { title: "Blind-Spot Monitoring", description: "Alerts you to vehicles beside you." },
            { title: "Heads-Up Display", description: "Important info on your windshield." },
            { title: "Smart Power Liftgate", description: "Automatic trunk opening." },
            { title: "Rear Occupant Alert", description: "Reminds you to check back seats." }
        ],
        ["./assets/main/cars/Photo8.png"],
        5,
        false
    ),
    new NewCar(
        "subaru-001",
        "new-car",
        "Subaru Outback",
        42000,
        "Subaru Outback is a rugged crossover wagon offering safety and capability for all terrains.",
        [
            { key: "Type", value: "Crossover" },
            { key: "Engine", value: "2.4L Turbocharged Boxer" },
            { key: "Horsepower", value: "260 HP" },
            { key: "Transmission", value: "CVT" },
            { key: "Seating", value: "5 seats" }
        ],
        [
            { title: "Symmetrical All-Wheel Drive", description: "Confidence in all conditions." },
            { title: "EyeSight Driver Assist", description: "Advanced safety tech." },
            { title: "Roof Rails with Crossbars", description: "Ready for gear transport." },
            { title: "X-Mode with Hill Descent Control", description: "Enhanced off-road driving." }
        ],
        ["./assets/main/cars/Photo9.png"],
        3,
        false
    )
    
];


export const newElectricCarsArray = [

    new NewElectricCar(
        "tesla-001",
        "new-electric",
        "Tesla Model S",
        90000,
        "Tesla Model S is a revolutionary electric sedan offering high performance and cutting-edge technology.",
        [
            { key: "Type", value: "Sedan" },
            { key: "Engine", value: "Electric Dual Motor" },
            { key: "Horsepower", value: "670 HP" },
            { key: "Transmission", value: "Single-Speed Automatic" },
            { key: "Seating", value: "5 seats" }
        ],
        [
            { title: "Autopilot", description: "Advanced driver-assistance system." },
            { title: "Premium Interior", description: "Minimalistic luxury design." },
            { title: "HEPA Air Filtration", description: "Medical-grade air quality inside." },
            { title: "Over-the-air Updates", description: "Constant software improvements remotely." }
        ],
        ["./assets/main/cars/Photo2.png"],
        100,
        60,
        4,
        true
    ),
    new NewElectricCar(
        "toyota-001",
        "new-electric",
        "Toyota RAV4 Electric",
        40000,
        "Toyota RAV4 Electric combines efficiency, practicality, and rugged design for adventurous drivers.",
        [
            { key: "Type", value: "SUV" },
            { key: "Engine", value: "Electric Motor" },
            { key: "Horsepower", value: "219 HP" },
            { key: "Transmission", value: "CVT" },
            { key: "Seating", value: "5 seats" }
        ],
        [
            { title: "AWD-i", description: "All-wheel drive with intelligence." },
            { title: "Toyota Safety Sense", description: "Advanced safety package." },
            { title: "Power Liftgate", description: "Convenient access to the trunk." },
            { title: "Wireless Apple CarPlay", description: "Seamless smartphone integration." }
        ],
        ["./assets/main/cars/Photo5.png"],
        100,
        120,
        3,
        true
    ),
]
