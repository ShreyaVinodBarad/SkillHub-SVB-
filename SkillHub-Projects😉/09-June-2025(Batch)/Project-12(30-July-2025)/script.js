const seatContainer = document.querySelector("#seatContainer");
for (const item of Array.from({ length: 60 })) {
    seatContainer.innerHTML += `<div class="size-8 border border-gray-400"></div>`
}