import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const CreatingFormWithFormikComponents = () => {
    const [formData, setFormData] = useState({})
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header alert alert-warning fs-4 text-center">
                                Creating Form with Formik Components
                            </div>
                            <div class="card-body">
                                <Formik
                                    initialValues={{ name: "", age: "", password: "", gender: "", hobby: "", city: "", comment: "" }}
                                    onSubmit={(values) => {
                                        console.log(values)
                                        setFormData(values)
                                    }}
                                >
                                    <Form>
                                        <Field
                                            type="text"
                                            name="name"
                                            className="form-control" placeholder="Enter name..."
                                        />

                                        <Field
                                            type="number"
                                            name="age"
                                            className="form-control mt-3" placeholder="Enter age..."
                                        />

                                        <Field
                                            type="password"
                                            name="password"
                                            className="form-control mt-3" placeholder="Enter password..."
                                        />

                                        <label
                                            htmlFor=""
                                            className='mt-1'
                                        >
                                            Gender
                                        </label>
                                        <div className='d-flex align-items-center gap-5'>
                                            <div className='d-flex gap-2 form-check'>
                                                <Field
                                                    type="radio"
                                                    name="gender"
                                                    value="Male"
                                                    id="male"
                                                    className="form-check-input"
                                                />
                                                <label className='form-check-label' htmlFor='male'>
                                                    Male
                                                </label>
                                            </div>

                                            <div className='d-flex gap-2 form-check'>
                                                <Field
                                                    type="radio"
                                                    name="gender"
                                                    value="Female"
                                                    id="female"
                                                    className="form-check-input"
                                                />
                                                <label className='form-check-label' htmlFor='female'>
                                                    Female
                                                </label>
                                            </div>
                                        </div>

                                        <label
                                            htmlFor=""
                                            className='mt-1'
                                        >
                                            Hobbies
                                        </label>
                                        <div className='d-flex align-items-center gap-5'>
                                            <div class="form-check">
                                                <Field
                                                    class="form-check-input" type="checkbox"
                                                    value="Dancing"
                                                    name="hobby"
                                                    id="Dancing" />
                                                <label
                                                    class="form-check-label" htmlFor="Dancing"
                                                >
                                                    Dancing
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <Field
                                                    class="form-check-input" type="checkbox"
                                                    value="Writing"
                                                    name="hobby"
                                                    id="Writing"
                                                />
                                                <label
                                                    class="form-check-label" htmlFor="Writing"
                                                >
                                                    Writing
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <Field
                                                    class="form-check-input" type="checkbox"
                                                    value="Singing"
                                                    name="hobby"
                                                    id="Singing" />
                                                <label
                                                    class="form-check-label" htmlFor="Singing"
                                                >
                                                    Singing
                                                </label>
                                            </div>
                                        </div>

                                        <Field class="form-select mt-3" as="select" name='city'>
                                            {/* 👆 as means "use this HTML tag" for the Formik Field.
                                            Example:
                                            as="select" → tells Formik to show a dropdown instead of a normal input.*/}
                                            <option value="">
                                                Select City
                                            </option>
                                            <option value="Mumbai">
                                                Mumbai
                                            </option>
                                            <option value="Hyderabad">
                                                Hyderabad
                                            </option>
                                            <option value="Chhatrapati Sambhaji Nagar">
                                                Chhatrapati Sambhaji Nagar
                                            </option>
                                        </Field>

                                        <label
                                            htmlFor=""
                                            className='mt-2'
                                        >
                                            Comment
                                        </label>
                                        <Field
                                            as="textarea"
                                            name="comment"
                                            className="form-control mt-2"
                                        />

                                        <button type="submit" class="btn btn-primary mt-3 w-100">
                                            Submit
                                        </button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                        <h6>{JSON.stringify(formData)}</h6>
                        {/* 
                        👆
                        - It simply converts your form data (object) into a readable text format (string) so you can see it on the screen.
                        - In short:
                        It shows the full form data like an object — useful for checking what values were submitted.
                        */}
                        <h6>{formData.name}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatingFormWithFormikComponents
/*
1) YouTube:
a) Using Fromik:
- Form Creation
- Form Handling
- Formik -> Some Components: <Form>, <Field>, <ErrorMessage>, etc
---------------------------------------------------------------
2) Notes
a) <Formik>
- It is the main wrapper for your form.
- It manages the form’s state, values, and submission.

b) <Form>
- It is a replacement for <form> tag.
- It connects your HTML form with Formik’s system.

c) <Field>
- It is a replacement for <input>, <select>, <textarea>, etc.
- Formik automatically manages its value and onChange.
- as:
as="select" → shows dropdown
as="textarea" → shows text area

d) <ErrorMessage>
- Used to show validation errors for a specific field.

e) In short summary:
| Component        | Purpose                          |
| ---------------- | -------------------------------- |
| <Formik>         | Wraps everything & manages state |
| <Form>           | Replaces normal `<form>`         |
| <Field>          | Replaces input/select/textarea   |
| <ErrorMessage>   | Shows validation error message   |
---------------------------------------------------------------
*/ 