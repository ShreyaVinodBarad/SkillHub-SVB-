const board = ["", "", "", "", "", "", "", "", ""];
/*
👆
- This array represents the 3x3 tic-tac-toe board.
- Each index (0–8) corresponds to a cell on the board.
- Initially, all cells are empty ("").
*/
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
/*
👆
- These are the winning combinations — if any of these contain the same symbol ("x" or "o"), that player wins.
*/
const boxContainer = document.getElementById("box-container");
/*
👆
- Gets the container (from HTML) where the 9 boxes (cells) will be displayed.
*/
let chance = "x";
/*
👆
- Keeps track of the current player's turn. Starts with "x".
*/
function drawBoard() {
    let i = 0;
    // 👆 Here, i is used to check which box is clicked - here box numbering starts with 0, as it's an array!
    boxContainer.innerHTML = "";
    /*
    👆 
    boxContainer.innerHTML has 9 boxes and becauuse of += 👇, when we click on the box extra 9 boxes are created so, to avoid this concatenation of boxes we make boxContainer.innerHTML = "" empty so before the for-of loop runs the boxContainer.innerHTML = "" will be empty...
    */
    /*
    👆
    - Resets the box container every time before drawing.
    - Prevents duplication of boxes on each click.
    */
    for (let item of board) {
        boxContainer.innerHTML += `<div class = "size-36 border border-gray-400 flex justify-center items-center text-6xl" onclick = "handleClick(${i})">
    ${item}
    </div>`;
        // ⭐ size class is used for both height and width in tailwind!
        i++;
    }
    /*
    👆
    - Loops through the board array.
    - For each cell, it creates a styled <div> using Tailwind CSS.
    - Adds an onclick handler that calls handleClick(index) when clicked.
    - Displays either "x", "o", or nothing based on the current board[i] value.
    */
}
function handleClick(index) {
    if (board[index] !== "") {
        console.error("No Cheating!");
        /* 👆 When there is something other than empty string and if we again on that than it will show console error */
        /*
        👆
        - Prevents overwriting a cell that already has "x" or "o".
        - If empty, it continues.
        */
    }
    else {
        // console.log(index);
        board[index] = chance;
        /*
        👆
        - Places the current player’s symbol in the clicked cell.
        */
        if (checkWinner(chance)) {
            console.log(`${chance} is winner!`);
            reset();
        }
        /*
        👆
        - Calls checkWinner to see if the current player has won.
        - If yes, displays a win message and resets the board.
        */
        else {
            let count = 0;
            for (let item of board) {
                if (item) {
                    count++;
                }
            }
            if (count === 9) {
                console.log("Match Draw!");
                reset();
            }
        }
        /*
        👆
        - Checks if the board is full (i.e., 9 filled cells) → then it's a draw.
        */
        chance = chance === "x" ? "o" : "x";
        // console.log(board);
        drawBoard();
        /*
        👆
        - Switches turn between "x" and "o".
        - Redraws the board with the new move.
        */
    }
}

function reset() {
    let i = 0;
    for (let item of board) {
        board[i] = "";
        i++;
    }
    drawBoard();
}
/*
👆
- Clears the board by setting each cell back to "".
- Then calls drawBoard() to refresh the view.
*/

function checkWinner(arg) {
    let winner;
    for (let item of winPattern) {
        winner = true;
        for (let index of item) {
            if (board[index] !== arg) {
                /*
                👆
                - Check if the value at board[index] is not equal to the current player’s symbol (arg).
                - If any of the 3 cells doesn't match, then it is not a winning combination for this player.
                */
                winner = false;
                break;
                /*
                - If even one cell in the pattern is different, set winner = false.
                - Then break out of the inner loop early (no need to check the other 2 cells).
                */
            }
        }
        if (winner) {
            return winner;
        }
        /*
        👆
        - If all 3 values in the pattern matched the player’s symbol, winner is still true.
        - So we return true, meaning the player has won.
        */
    }
    return winner;
    /*
    👆
    - After checking all patterns:
    a) If a winner was found, the function would have already returned true.
    b) If none matched, winner remains undefined or false, and is returned.
    */
}
/*
👆
- Checks if the current player (arg = "x" or "o") matches any of the winning combinations.
- If yes, returns true — indicating that player has won.
*/
drawBoard();
/*
👆
- This runs once when the script loads to draw the initial empty board.
*/
/*
1) Example
- If arg = "x" and board is:
["x", "x", "x", "", "", "", "", "", ""]
- Then the pattern [0, 1, 2] is checked.
- All 3 cells match "x", so checkWinner("x") returns true.
*/ 