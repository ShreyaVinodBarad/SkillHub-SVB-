import React from 'react'
import Center from "../../components/UI/Center"
import Input from "../../components/UI/Input"
import { Link } from "react-router-dom"

const Login = () => {
    const fields = [
        { label: "Email", placeholder: "Enter Email...", type: "email" },
        { label: "Password", placeholder: "Enter Password...", type: "password" }
    ]
    return (
        <Center col={8} offset={2}>
            <div class="card mt-3">
                <div class="card-header alert alert-warning fs-3 text-center">
                    Login
                </div>
                <div class="card-body">
                    {/* 
                    <Input
                        label="Email"
                        placeholder="Enter Email..."
                        className="form-control"
                        type="email"
                    />
                    <Input
                        label="Password"
                        placeholder="Enter Password..."
                        className="form-control"
                        type="password"
                        />
                    */}
                    {
                        fields.map(item => <Input className="form-control" {...item} />)
                    }
                    <button type="button" class="btn btn-primary w-100 mt-3">
                        Login
                    </button>
                    <p class="text-center mt-3">
                        Dont Have Account?
                        <Link to="/register" href="#">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </Center>
    )
}

export default Login