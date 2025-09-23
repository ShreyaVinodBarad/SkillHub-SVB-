const from = document.getElementById("from")
const to = document.getElementById("to")
const BUSES = [
    // Pune ↔ Mumbai
    { id: 1, name: "Shreyash", price: 500, from: "Pune", to: "Mumbai", features: ["AC", "Sleeper"], image: "https://source.unsplash.com/600x400/?bus,travel" },
    { id: 2, name: "Neeta", price: 650, from: "Pune", to: "Mumbai", features: ["AC", "Seater"], image: "https://source.unsplash.com/600x400/?bus,coach" },
    { id: 3, name: "VRL", price: 700, from: "Mumbai", to: "Pune", features: ["Non-Ac", "Sleeper"], image: "https://source.unsplash.com/600x400/?bus,india" },
    { id: 4, name: "Orange", price: 850, from: "Mumbai", to: "Pune", features: ["AC", "Luxury"], image: "https://source.unsplash.com/600x400/?bus,luxury" },

    // Pune ↔ Aurangabad
    { id: 5, name: "Raj Travels", price: 600, from: "Pune", to: "Aurangabad", features: ["Non-AC", "Sleeper"], image: "https://source.unsplash.com/600x400/?bus,express" },
    { id: 6, name: "Hans", price: 750, from: "Pune", to: "Aurangabad", features: ["AC", "Sleeper"], image: "https://source.unsplash.com/600x400/?bus,vehicle" },
    { id: 7, name: "Mahasagar", price: 500, from: "Aurangabad", to: "Pune", features: ["Non-AC", "Seater"], image: "https://source.unsplash.com/600x400/?bus,transport" },
    { id: 8, name: "Sharma", price: 550, from: "Aurangabad", to: "Pune", features: ["AC", "Seater"], image: "https://source.unsplash.com/600x400/?bus,street" },

    // Pune ↔ Nagpur
    { id: 9, name: "Paulo", price: 1100, from: "Pune", to: "Nagpur", features: ["AC", "Sleeper"], image: "https://source.unsplash.com/600x400/?bus,night" },
    { id: 10, name: "Morning Star", price: 950, from: "Pune", to: "Nagpur", features: ["AC", "Seater"], image: "https://source.unsplash.com/600x400/?bus,modern" },
    { id: 11, name: "GreenLine", price: 1200, from: "Nagpur", to: "Pune", features: ["AC", "Luxury"], image: "https://source.unsplash.com/600x400/?green,bus" },
    { id: 12, name: "Megha", price: 900, from: "Nagpur", to: "Pune", features: ["AC", "Sleeper"], image: "https://source.unsplash.com/600x400/?bus,comfort" },

    // Mumbai ↔ Aurangabad
    { id: 13, name: "Kaveri", price: 950, from: "Mumbai", to: "Aurangabad", features: ["AC", "Sleeper"], image: "https://source.unsplash.com/600x400/?bus,journey" },
    { id: 14, name: "Jabbar", price: 600, from: "Mumbai", to: "Aurangabad", features: ["AC", "Seater"], image: "https://source.unsplash.com/600x400/?bus,roadtrip" },
    { id: 15, name: "KPN", price: 1000, from: "Aurangabad", to: "Mumbai", features: ["AC", "Seater"], image: "https://source.unsplash.com/600x400/?bus,modern,coach" },
    { id: 16, name: "CityLink", price: 550, from: "Aurangabad", to: "Mumbai", features: ["Non-AC", "Seater"], image: "https://source.unsplash.com/600x400/?city,bus" },

    // Mumbai ↔ Nagpur
    { id: 17, name: "Patel", price: 1000, from: "Mumbai", to: "Nagpur", features: ["AC", "Luxury"], image: "https://source.unsplash.com/600x400/?luxury,bus" },
    { id: 18, name: "Yatra", price: 1200, from: "Mumbai", to: "Nagpur", features: ["AC", "Sleeper"], image: "https://source.unsplash.com/600x400/?bus,traveling" },
    { id: 19, name: "Intercity", price: 850, from: "Nagpur", to: "Mumbai", features: ["AC", "Seater"], image: "https://source.unsplash.com/600x400/?bus,city" },
    { id: 20, name: "Royal", price: 950, from: "Nagpur", to: "Mumbai", features: ["AC", "Luxury"], image: "https://source.unsplash.com/600x400/?royal,bus" },

    // Aurangabad ↔ Nagpur
    { id: 21, name: "KSRTC", price: 700, from: "Aurangabad", to: "Nagpur", features: ["AC", "Seater"], image: "https://source.unsplash.com/600x400/?bus,road" },
    { id: 22, name: "Manish Travels", price: 800, from: "Aurangabad", to: "Nagpur", features: ["AC", "Sleeper"], image: "https://source.unsplash.com/600x400/?bus,indian" },
    { id: 23, name: "National", price: 950, from: "Nagpur", to: "Aurangabad", features: ["AC", "Luxury"], image: "https://source.unsplash.com/600x400/?national,bus" },
    { id: 24, name: "Shatabdi", price: 650, from: "Nagpur", to: "Aurangabad", features: ["Non-AC", "Seater"], image: "https://source.unsplash.com/600x400/?bus,classic" },

    // Extra Pune ↔ Mumbai (very popular route)
    { id: 25, name: "SRS", price: 600, from: "Pune", to: "Mumbai", features: ["AC", "Seater"], image: "https://source.unsplash.com/600x400/?bus,passenger" }
];

const handleSearch = () => {
    // console.log(from.value)
    // console.log(to.value)
    const result = BUSES.filter(item => item.from === from.value && item.to === to.value)
    display(result)
}
const display = (data) => {
    const root = document.getElementById("root")
    root.innerHTML = ""
    for (let item of data) {
        let str = ""
        for (const feature of item.features) {
            str += `<span class="badge text-bg-primary fs-6">${feature}</span>`
        }
        root.innerHTML += `
                    <div class="card my-4">
                        <div class="card-body">
                            <img src="https://images.unsplash.com/photo-1564694202883-46e7448c1b26?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzfGVufDB8fDB8fHww"
                                alt="BusImg" width="100px" height="90px">
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <h6>${item.name}</h6>
                                <h6>${item.price}</h6>
                            </div>
                            <div class = "d-flex gap-3 mt-2">
                                ${str}
                            </div>
                        </div>
                    </div>
                `
    }
}
