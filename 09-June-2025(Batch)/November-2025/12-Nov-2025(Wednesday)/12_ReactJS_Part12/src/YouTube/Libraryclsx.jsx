import clsx from 'clsx'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
/*
👆
clsx → helps add classes conditionally (for valid/invalid).
Formik, Form, Field → for form handling.
Yup → for form validation.
*/

const Libraryclsx = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is Mandatory!").min(2).max(25),
        age: Yup.string().required("Age is Mandotary!")
    })
    // 👆 Validation rules 
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header alert alert-warning fs-4 text-center">
                                Working on clsx Library
                            </div>
                            <div class="card-body">
                                <Formik
                                    initialValues={{ name: "", age: "" }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        console.log(values)
                                    }}
                                >
                                    {/* 
                                    👆
                                    Formik setup:
                                    initialValues → sets empty default values.
                                    validationSchema → connects Yup validation.
                                    onSubmit → logs form data to console.
                                    */}

                                    {({ touched, errors }) => (
                                        <Form>
                                            <Field
                                                name="name"
                                                placeholder="Enter your name"
                                                className={clsx("form-control", {
                                                    "is-invalid": touched.name && errors.name,
                                                    "is-valid": touched.name && !errors.name,
                                                })}
                                            />
                                            {/* 
                                            {({ touched, errors }) => ( ... )}
                                            👆
                                            - This is Formik’s render function.
                                            - It gives you touched and errors objects:
                                            a) touched.name → true if user clicked or typed in the name field
                                            b) errors.name → contains error text if validation fails.
                                            */}
                                            {
                                                touched.name && errors.name && (
                                                    <div className='invalid-feedback'>
                                                        {errors.name}
                                                    </div>
                                                )
                                            }
                                            {/* 
                                            👆
                                            - If the user touched the field and an error exists —
                                            - It shows a <div> with Bootstrap’s red-text message like “Name is Mandatory!”.
                                            */}

                                            <Field
                                                name="age"
                                                placeholder="Enter your age"
                                                className={clsx("form-control", "mt-3", {
                                                    "is-invalid": touched.age && errors.age,
                                                    "is-valid": touched.age && !errors.age,
                                                })}
                                            />
                                            {
                                                touched.age && errors.age && (
                                                    <div className='invalid-feedback'>
                                                        {errors.age}
                                                    </div>
                                                )
                                            }

                                            <button type="submit" class="btn btn-primary mt-3 w-100">
                                                Submit
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Libraryclsx
/*
1) What is clsx?
- clsx is a small JavaScript utility used in React to combine multiple class names easily.
- It helps you write clean, readable, and conditional className code.
- In simple words:
It decides which classes to apply based on conditions.
- clsx is a library that exports one main function — also called clsx().
- So technically:
a) clsx (the library) → is what you install using npm install clsx
b) clsx() (the function) → is what you actually use in your code

2) Why use clsx?
- To add classes conditionally
- To avoid long ternary operators
- To combine multiple classes neatly
- To make code cleaner and easier to maintain

3) Installation
- You can install clsx using npm:
npm install clsx
- Then import it in your React file:
import clsx from "clsx";

4) Syntax
className={clsx("class1", "class2", { "class3": condition}}

5) Explanation:
| Part                      | Meaning                              |
| ------------------------- | -------------------------------------|
| "class1", "class2"        | Always added                         |
| {"class3": condition }    | Added only if `condition` is true    |
| { }` outside              | Because we’re writing JavaScript in  |

6) In Short:
clsx = Smart way to handle multiple or conditional class names in React.
clsx is a small JavaScript library that provides a function to conditionally join class names in React.
- In short:
clsx = a small library
clsx() = a function inside that library
Purpose = to combine class names smartly and conditionally
-----------------------------------------------------------
*/ 