const seatContainer = document.querySelector("#seatContainer");
let seatNo = 0;
const pricePerSeat = 300;
for (const item of Array.from({ length: 60 })) {
    seatContainer.innerHTML += `<div id = "seat-${seatNo}" class="size-8 border border-gray-400" onclick = "selectSeat('seat-${seatNo}')"></div>`
    seatNo++;
}
function selectSeat(seatId) {
    if (document.getElementById(seatId).classList.contains("bg-gray-300")) {
        console.log("Seat already booked!");
        return;
    }
    document.getElementById(seatId).classList.toggle("bg-green-500");
    const selectedSeats = document.querySelectorAll(".bg-green-500").length;
    let amount = selectedSeats * pricePerSeat;
    let gst = amount * 18 / 100;
    let total = gst + amount;
    document.getElementById("seatsSelected").innerHTML = `You have selected ${selectedSeats} seats.`;
    document.getElementById("seatsSelectedAmount").innerHTML = `Total Amount is ${amount}.`;
    document.getElementById("tax").innerHTML = `GST is ${gst}.`;
    document.getElementById("total").innerHTML = `Total is ${total}.`;
    document.getElementById("button").innerHTML = `<button onclick="bookSeats()" class="bg-blue-500 px-6 py-3 block mx-auto my-3">
                Book
            </button>`;
    if (selectedSeats === 0) {
        reset();
    }
}
function bookSeats() {
    const seats = document.querySelectorAll(".bg-green-500");
    for (const item of seats) {
        item.classList.remove("bg-green-500");
        item.classList.add("bg-gray-300");
    }
    reset();
}
function reset() {
    document.getElementById("seatsSelected").innerHTML = "";
    document.getElementById("seatsSelectedAmount").innerHTML = "";
    document.getElementById("tax").innerHTML = "";
    document.getElementById("total").innerHTML = "";
    document.getElementById("button").innerHTML = "";
}