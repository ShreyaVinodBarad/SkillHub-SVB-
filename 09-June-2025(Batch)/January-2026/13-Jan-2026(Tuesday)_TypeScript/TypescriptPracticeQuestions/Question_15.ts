function getUser(id: number) {
    if (id === 1) {
        return {
            name: "John",
            age: 25
        };
    }
    return "User not found";
}
