const BUSES = [
    { id: 1, name: "humsfar", from: "pune", to: "mumbai", price: 850 },
    { id: 2, name: "saini", from: "nagpur", to: "mumbai", price: 1850 },
    { id: 3, name: "humsfar", from: "nagpur", to: "pune", price: 1250 },
    { id: 4, name: "test", from: "sambhaji nagar", to: "pune", price: 600 }
]
// Problem 01 - Find all the buses for Nagpur to Mumbai 👇
const prob1 = BUSES.filter(item => item.from === "nagpur" && item.to === "mumbai")
console.log(prob1)
// Problem 02 - Find all the buses with fare less than 1500  👇
const prob2 = BUSES.filter(item => item.price < 1500).map(item => item.name)
console.log(prob2)
// Problem 03 - Find all buses only name to Mumbai  👇
const prob3 = BUSES.filter(item => item.to === "mumbai").map(item => item.name)
console.log(prob3)

// Filtering the data for Sleeper Buses 👇
const BUSES01 = [
    { id: 21, name: "KSRTC", price: 700, from: "Aurangabad", to: "Nagpur", features: ["ac", "seater"], image: "https://source.unsplash.com/600x400/?bus,road" },
    { id: 22, name: "Manish Travels", price: 800, from: "Aurangabad", to: "Nagpur", features: ["ac", "sleeper"], image: "https://source.unsplash.com/600x400/?bus,indian" },
    { id: 23, name: "National", price: 950, from: "Nagpur", to: "Aurangabad", features: ["ac", "luxury"], image: "https://source.unsplash.com/600x400/?national,bus" },
    { id: 24, name: "Shatabdi", price: 650, from: "Nagpur", to: "Aurangabad", features: ["non-ac", "seater"], image: "https://source.unsplash.com/600x400/?bus,classic" }
]
const sleeper = BUSES01.filter(item => item.features.includes("sleeper"))
console.log(sleeper)