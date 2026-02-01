type UserRole = "admin" | "user";

function checkAccess(role: UserRole) {
    // if (role === "Admin") {
    if (role === "admin") {
        return true;
    }
    return false;
}
