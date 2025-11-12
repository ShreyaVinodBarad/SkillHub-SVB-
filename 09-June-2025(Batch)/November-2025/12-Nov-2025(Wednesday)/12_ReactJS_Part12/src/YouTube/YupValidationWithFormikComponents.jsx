import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from "yup"
import React, { useState } from 'react'
import RedErrorMessage from './RedErrorMessage'

const YupValidationWithFormikComponents = () => {
    const [formData, setFormData] = useState({})
    const newValidations = yup.object({
        name: yup.string().required(),
        age: yup.number().required().min(10).max(50),
        password: yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/)
            .required("Password is Must!"),
        gender: yup.string().required(),
        hobby: yup.array().min(1, "One hobby is must"),
        city: yup.string().required(),
        comment: yup.string().required()
    })
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header alert alert-warning fs-4 text-center">
                                Yup Validation with Formik Components
                            </div>
                            <div class="card-body">
                                <Formik
                                    initialValues={{ name: "", age: "", password: "", gender: "", hobby: [], city: "", comment: "" }}
                                    validationSchema={newValidations}
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
                                        <RedErrorMessage name="name" />
                                        {/* <ErrorMessage name='name' /> */}

                                        <Field
                                            type="number"
                                            name="age"
                                            className="form-control mt-3" placeholder="Enter age..."
                                        />
                                        <RedErrorMessage name="age" />

                                        <Field
                                            type="password"
                                            name="password"
                                            className="form-control mt-3" placeholder="Enter password..."
                                        />
                                        <RedErrorMessage name="password" />

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
                                        <RedErrorMessage name="gender" />

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
                                        <RedErrorMessage name="hobby" />

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
                                        <RedErrorMessage name="city" />

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
                                        <RedErrorMessage name="comment" />

                                        <button type="submit" class="btn btn-primary mt-3 w-100">
                                            Submit
                                        </button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                        <pre className='alert alert-success mt-3'>
                            {JSON.stringify(formData)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YupValidationWithFormikComponents