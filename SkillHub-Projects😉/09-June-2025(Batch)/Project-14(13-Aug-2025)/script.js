const title = document.getElementById("title");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const category = document.getElementById("category");
const note = document.getElementById("note");
const accountData = [
    { title: "Budget Tracker", amount: "20000", type: "Income", category: "Salary", note: "Microsoft Monthly Salary" },
    { title: "Petrol", amount: "200", type: "Expense", category: "Transport", note: "Car Petrol" },
    { title: "Food", amount: "180", type: "Expense", category: "Food", note: "Pizza & Burger" }
];

const handleAdd = () => {
    /*
    console.log(title.value, amount.value, type.value, category.value, note.value);
    */
    accountData.splice(0, 0, {
        title: title.value,
        amount: amount.value,
        type: type.value,
        category: category.value,
        note: note.value
    });
    // console.log(accountData);

    resetInput();
    displayDataInTable();
};

const displayDataInTable = () => {
    let str = "";
    let id = 1;
    for (const item of accountData) {
        str += `<tr class = "${item.type === "Expense" && "table-danger"}">
                    <td> ${id}</td >
                    <td>${item.title}</td>
                    <td class = "${item.type === "Income" && "table-success"}" > ${item.amount}</td > 
                    <td>${item.type}</td>
                    <td>${item.category}</td>
                    <td>${item.note}</td>
                </tr > `
        /*
        100 > 50 && "Hello" 
        👆
        true so after && there is no condition so "Hello" is printed!
        */
        id++;
    }
    document.getElementById("root").innerHTML = str;
}

const resetInput = () => {
    for (const item of [title, amount, type, category, note]) {
        item.value = "";
    }
}
displayDataInTable();