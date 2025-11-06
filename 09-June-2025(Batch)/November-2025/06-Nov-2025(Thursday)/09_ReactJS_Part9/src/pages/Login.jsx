import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleSubmit = () => {
        if (email === "test@gmail.com" && password === "123") {
            setIsLogin(true)
            setError("")
            console.log("Login Success!")
            navigate("/admin")
        }
        else {
            setError("Invalid Credentials!")
        }
    }
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 offset-sm-3">
                        {
                            error && <div class="alert alert-danger text-center mt-3">
                                {error}
                            </div>
                        }
                        <div class="card mt-3">
                            <div class="card-header alert alert-warning text-center"><h4>Login</h4></div>
                            <div class="card-body">
                                <div>
                                    <label for="email" class="form-label">First Email</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="email"
                                        placeholder="Enter Your Email"
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        placeholder="Enter Your Password"
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button type="button" class="btn btn-primary w-100 mt-3" onClick={handleSubmit}>
                                    Login
                                </button>
                                <p class="text-center mt-3">
                                    Dont Have Account? <a href="#">Create Account</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login