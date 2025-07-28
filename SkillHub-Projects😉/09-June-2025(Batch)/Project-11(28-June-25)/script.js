const board = ["", "", "", "", "", "", "", "", ""];
const boxContainer = document.getElementById("box-container");
let chance = "x";
function drawBoard() {
    let i = 0;
    // Here, i is used to check which box is clicked - here box numbering starts with 0, as it's an array!
    boxContainer.innerHTML = "";
    /*
    👆 
    boxContainer.innerHTML has 9 boxes and becauuse of += 👇, when we click on the box extra 9 boxes are created so, to avoid this concatenation of boxes we make boxContainer.innerHTML = "" empty so before the for-of loop runs the boxContainer.innerHTML = "" will be empty...
    */
    for (let item of board) {
        boxContainer.innerHTML += `<div class = "size-36 border border-gray-400 flex justify-center items-center text-3xl" onclick = "handleClick(${i})">
    ${item}
    </div>`;
        // ⭐ size class is used for both height and width in tailwind!
        i++;
    }
}
function handleClick(index) {
    // console.log(index);
    board[index] = chance;
    chance = chance === "x" ? "o" : "x";
    // console.log(board);
    drawBoard();
}
drawBoard();