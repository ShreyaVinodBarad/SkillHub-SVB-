type Order = {
    id: number;
    amount: number;
    status: "pending" | "completed";
}

// const order: Order = {
//     id: 1,
//     amount: 500
// };

const order: Order = {
    id: 1,
    amount: 500,
    status: "completed"
};
function completeOrder(order: Order) {
    // order.status = "done";
    order.status = "completed";
}
