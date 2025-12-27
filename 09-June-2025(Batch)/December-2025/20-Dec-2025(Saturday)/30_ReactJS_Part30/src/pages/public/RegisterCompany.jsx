import React from 'react'
import Center from '../../components/UI/Center'
import Input from '../../components/UI/Input'
import { Link } from "react-router-dom"

const RegisterCompany = () => {
    const fields = [
        { label: "Name", placeholder: "Enter Name...", type: "text" },
        { label: "Email", placeholder: "Enter Email...", type: "email" },
        { label: "Logo", placeholder: "Enter Logo URL...", type: "text" },
        { label: "Address", placeholder: "Enter Address...", type: "text" }
    ]
    return (
        <Center>
            <div class="card my-3">
                <div class="card-header alert alert-warning fs-3 text-center">
                    Register
                </div>
                <div class="card-body">
                    {
                        fields.map(item => <Input className="form-control" {...item} />)
                    }
                    <button type="button" class="btn btn-primary w-100 mt-3">
                        Register
                    </button>
                    <p class="text-center mt-3">
                        Already Have Account?
                        <Link to="/" href="#">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </Center>
    )
}

export default RegisterCompany