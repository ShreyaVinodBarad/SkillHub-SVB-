import * as Yup from "yup"
// 👆 This imports the Yup library — used for form validation (checking if input is correct).

export const FormSchema = Yup.object({
    /*
    👆
    - We create and export a validation schema (set of rules) for a form.
    - Yup.object() means our form data is an object (like { name: "", email: "" }).
    */

    name: Yup.string().min(3, "Too Short...").max(30, "Too Long...").required("Name is Required!"),
    /*
    👆
    a) name field rules:
    - Must be a string (text).
    - Must have at least 3 letters, otherwise show "Too Short...".
    - Must have max 30 letters, otherwise show "Too Long...".
    - Must not be empty, otherwise show "Name is Required!".
    */

    email: Yup.string().email("Invalid Email...").required("Email is Required!"),
    /*
    👆
    b) email field rules:
    - Must be text.
    - Must look like a valid email format (abc@gmail.com), otherwise show "Invalid Email...".
    - Must not be empty, otherwise show "Email is Required!".
    */

    // 👆 Function Chaining => “Function chaining” means we can connect many checks together (.min().max().required()) in one line.

    age: Yup.number().min(10).max(50).required("Age is mandatory!"),
    password: Yup.string()
        .required("Password is Mandotary!")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/, "Enter Strong Password!"),
    /*
    👆
    /
    ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$
    /  => Regex must be between //
    => What it means (short)
    - (?=.*[a-z]) → at least one lowercase
    - (?=.*[A-Z]) → at least one uppercase
    - (?=.*\d) → at least one digit
    - (?=.*[!@#$...]) → at least one special character from that set
    - .{8,} → minimum 8 characters total
    */

    confirmPassword: Yup.string()
        .required("Confirm Password is Must!")
        .oneOf([Yup.ref("password"), null], "Both Password must Match!")
    /*
    👆
    a) oneOf() → checks if the value is one of the given options in the array.
    b) Yup.ref("password") → means "take the value of the password field".
    c) null → allows it to be empty if needed (optional here).
    - So this line checks 👉
    The value of confirmPassword must be the same as password — otherwise, show the message "Both Password must Match!".
    */
})

/*
- Yup.object() → means we are validating an object (the form).
- Yup.string() → means the field must be text.
- .min(3) and .max(30) → name must be between 3–30 letters.
- .email() → checks for valid email format.
- .required() → field cannot be empty.
=> These are called function chains — many checks on one field.
*/ 