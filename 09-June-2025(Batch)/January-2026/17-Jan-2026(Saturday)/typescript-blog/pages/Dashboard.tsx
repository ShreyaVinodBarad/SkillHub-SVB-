import { useFormik } from "formik"
import * as yup from "yup"
import type { Blog } from "./../types/Blog"

const Dashboard = () => {
    const blogSchema: yup.ObjectSchema<Blog> = yup.object({
        //                   👆 It tells ObjectSchema that use schema of Blog.
        id: yup.number().optional(),
        title: yup.string().required(),
        desc: yup.string().required(),
        hero: yup.string().required(),
        publish: yup.boolean().required()
    })
    /*
    1) blogSchema is a set of rules used to check (validate) the form data before submitting.
    - It is created using Yup and used inside Formik. 
    - Validation rules for the Blog form.
    - blogSchema is a Yup validation schema that defines rules to validate the Blog form fields before submission.
    */

    // 📌 Shortcut: srfmk
    const formik = useFormik<Blog>({
        initialValues: {
            title: "",
            desc: "",
            hero: "",
            publish: false
        },
        /*
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
        }),
        */
        validationSchema: blogSchema,
        /*
        👆
        - This tells Formik:
        “Before submitting the form, check all fields using these rules.”
        - If any rule fails → form will show validation error and not submit.
        */
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter title..."
                    {...formik.getFieldProps("title")}
                />
                <input
                    type="text"
                    placeholder="Enter description..."
                    {...formik.getFieldProps("desc")}
                />
                <input
                    type="text"
                    placeholder="Enter hero..."
                    {...formik.getFieldProps("hero")}
                />
                <button type="submit">
                    Save
                </button>
            </form>
        </>
    )
}

export default Dashboard