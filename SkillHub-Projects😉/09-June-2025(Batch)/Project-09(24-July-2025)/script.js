let chance = "x";
function handleClick(id) {
    let box = document.getElementById(id);
    if (box.innerHTML !== "x" && box.innerHTML !== "o") {
        if (chance === "x") {
            box.innerHTML = "x";
            box.style.backgroundColor = "pink";
            chance = "o";
        }
        else {
            box.innerHTML = "o";
            box.style.backgroundColor = "coral";
            chance = "x";
        }
    }
    else {
        console.error("Cheating!");
    }
    checkWinner();
}
function checkWinner() {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    const box4 = document.getElementById("box4");
    const box5 = document.getElementById("box5");
    const box6 = document.getElementById("box6");
    const box7 = document.getElementById("box7");
    const box8 = document.getElementById("box8");
    const box9 = document.getElementById("box9");

    // For "X" 👇 8 conditions...
    if (box1.innerHTML === "x" && box2.innerHTML === "x" && box3.innerHTML === "x") {
        console.log("X is the Winner!");
    }
    else if (box4.innerHTML === "x" && box5.innerHTML === "x" && box6.innerHTML === "x") {
        console.log("X is the Winner!");
    }
    else if (box7.innerHTML === "x" && box8.innerHTML === "x" && box9.innerHTML === "x") {
        console.log("X is the Winner!");
    }
    else if (box1.innerHTML === "x" && box4.innerHTML === "x" && box7.innerHTML === "x") {
        console.log("X is the Winner!");
    }
    else if (box2.innerHTML === "x" && box5.innerHTML === "x" && box8.innerHTML === "x") {
        console.log("X is the Winner!");
    }
    else if (box3.innerHTML === "x" && box6.innerHTML === "x" && box9.innerHTML === "x") {
        console.log("X is the Winner!");
    }
    else if (box1.innerHTML === "x" && box5.innerHTML === "x" && box9.innerHTML === "x") {
        console.log("X is the Winner!");
    }
    else if (box3.innerHTML === "x" && box5.innerHTML === "x" && box7.innerHTML === "x") {
        console.log("X is the Winner!");
    }


    // For "O" 👇 8 conditions...
    if (box1.innerHTML === "o" && box2.innerHTML === "o" && box3.innerHTML === "o") {
        console.log("O is the Winner!");
    }
    else if (box4.innerHTML === "o" && box5.innerHTML === "o" && box6.innerHTML === "o") {
        console.log("O is the Winner!");
    }
    else if (box7.innerHTML === "o" && box8.innerHTML === "o" && box9.innerHTML === "o") {
        console.log("O is the Winner!");
    }
    else if (box1.innerHTML === "o" && box4.innerHTML === "o" && box7.innerHTML === "o") {
        console.log("O is the Winner!");
    }
    else if (box2.innerHTML === "o" && box5.innerHTML === "o" && box8.innerHTML === "o") {
        console.log("O is the Winner!");
    }
    else if (box3.innerHTML === "o" && box6.innerHTML === "o" && box9.innerHTML === "o") {
        console.log("O is the Winner!");
    }
    else if (box1.innerHTML === "o" && box5.innerHTML === "o" && box9.innerHTML === "o") {
        console.log("O is the Winner!");
    }
    else if (box3.innerHTML === "o" && box5.innerHTML === "o" && box7.innerHTML === "o") {
        console.log("O is the Winner!");
    }
}