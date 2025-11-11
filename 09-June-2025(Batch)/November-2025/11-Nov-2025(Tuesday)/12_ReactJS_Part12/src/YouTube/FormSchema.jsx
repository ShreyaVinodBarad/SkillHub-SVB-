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

    email: Yup.string().email("Invalid Email...").required("Email is Required!")
    /*
    👆
    b) email field rules:
    - Must be text.
    - Must look like a valid email format (abc@gmail.com), otherwise show "Invalid Email...".
    - Must not be empty, otherwise show "Email is Required!".
    */

    // 👆 Function Chaining => “Function chaining” means we can connect many checks together (.min().max().required()) in one line.
})
/*
- Yup.object() → means we are validating an object (the form).
- Yup.string() → means the field must be text.
- .min(3) and .max(30) → name must be between 3–30 letters.
- .email() → checks for valid email format.
- .required() → field cannot be empty.
=> These are called function chains — many checks on one field.
*/ 