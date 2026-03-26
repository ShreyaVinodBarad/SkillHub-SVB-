import { useFormik } from "formik"
import * as yup from "yup"
import type { Blog } from "./../types/Blog"
import { useAddBlogMutation, useDeleteBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from "../redux/apis/blog.api"
import { toast } from "react-toastify"
import { Button, Container, Table } from "react-bootstrap"

const Dashboard = () => {

    // 👇 These are auto-generated API hooks from Redux Toolkit Query used for fetching and modifying data in React applications.
    const { data } = useGetBlogsQuery() // 👉 used to fetch data (GET)
    // 👆 data = the actual API response. It contains the blogs fetched from the server. Example: array of blog objects

    const [addBlog] = useAddBlogMutation() // 👉 used to add data (POST)
    // 👆 addBlog = a function. Used to send new data to the server(POST request)

    const [updateBlog] = useUpdateBlogMutation() // 👉 used to update data (PUT/PATCH)
    // 👆 updateBlog = a function. Used to update existing data(PUT / PATCH request)

    const [deleteBlog] = useDeleteBlogMutation() // 👉 used to delete data (DELETE)
    // 👆 deleteBlog = a function. Used to delete data(DELETE request)

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
            handleAdd(values)
            // 👆 Calling handleAdd on clicking submit button.
            resetForm()
        }
    })

    const handleAdd = async (arg: Blog) => {
        /*
        👆
        - Create a function named handleAdd
        - arg → blog data coming as input
        */
        try {
            await addBlog(arg).unwrap()
            /*
            👆
            - Call addBlog function with blog data
            - await → wait until API finishes
            - .unwrap() → gives real success/error (makes error catch work properly)
            - unwrap() is used in Redux Toolkit Query to get the actual result or error from an API call.
            */
            toast.success("Blog Create Success!")
        } catch (error) {
            toast.error("Unable to Create Blog!")
        }
    }

    const handleUpdate = async (arg: Blog) => {
        try {
            await updateBlog(arg).unwrap()
            toast.success("Blog Update Success!")
        } catch (error) {
            toast.error("Unable to Update Blog!")
        }
    }

    const handleDelete = async (arg: number) => {
        try {
            await deleteBlog(arg).unwrap()
            toast.success("Blog Delete Success!")
        } catch (error) {
            toast.error("Unable to Delete Blog!")
        }
    }

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

            {/* 👇 Creating Table */}
            <Container>
                {
                    data && <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Hero</th>
                                <th>Publish</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <img src={item.hero} height={50} />
                                    </td>
                                    <td>
                                        {
                                            item.publish ? "Published" : "Draft"
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.publish
                                                ? <Button
                                                    variant="outline-danger"
                                                    onClick={() => handleUpdate({ ...item, publish: false })}
                                                >
                                                    UnPublish
                                                </Button>
                                                : <Button
                                                    variant="outline-success"
                                                    onClick={() => handleUpdate({ ...item, publish: true })}
                                                >
                                                    Publish
                                                </Button>
                                        }
                                        <Button
                                            variant="outline-danger"
                                            className="ms-2 btn-sm"
                                            onClick={() => handleDelete(item.id as number)}
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </Table>
                }
            </Container>
        </>
    )
}

export default Dashboard