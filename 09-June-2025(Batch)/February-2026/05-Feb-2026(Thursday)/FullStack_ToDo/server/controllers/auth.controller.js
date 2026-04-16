const User = require("../models/User.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
/*
👆
jsonwebtoken is an external npm package
- You install it using:
npm install jsonwebtoken
*/

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        // 👆 Destructuring values from req.body

        // 📌 Writing logic so that if a person is already registered with an email, they should not be allowed to register again.
        // Step 01: Check if this Email already exists in the database.
        const data = await User.findOne({ email }) // 👉 All fields present in the database => data
        // 👆 findOne(it gives object & find gives array) function check if email exists in the table User. If something exists than it will return object and if not it will give "null"

        // Step 02: If YES send error
        if (data) {
            return res.status(409).json({ message: "Email already exists!", success: false })
            // 👆 If email already exist code given after this will not execute as we are using return statement
        }

        // Step 03: If not present than run below code  
        const hashPassword = await bcrypt.hash(password, 10) // 👉 10 is resonable value that make password stronger
        // 👆 Here, hash is a function of bcryptjs and it takes 2 arguments => password(our normal string) and salt it means larger number it has the password will be that stronger. If you increase salt value it may be heavy on the processor
        console.log(hashPassword)
        // 👆 $2b$10$2amDdlHHr1cMT.Zh0dW4QeewNErlYIM5Dy5dLxGfSN/w8Ny6JV28O
        console.log(password)
        // 👆 123

        await User.create({ ...req.body, password: hashPassword })
        // 👆 Storing encrypted password in the database.

        // await User.create(req.body) // 👉 Database has an entry now
        // 👆 We want to put entry in User model. We get data that goes from frontend to backend in a variable named req.body

        res.status(201).json({ message: "User Register Success!" })
        // 👆 Then we will give a response
        console.log(req.body)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        // Step 01: Check if Email exists in our Database
        const data = await User.findOne({ email }) // 👉 All fields present in the database => data
        // 👆 findOne(it gives object & find gives array) function check if email exists in the table User. If something exists than it will return object and if not it will give "null"

        // Step 02: If not present send error
        if (!data) {
            return res.status(401).json({ message: "Email not found!", success: false })
        }

        // Step 03: Compare password => If email exists compare password
        const isValid = await bcrypt.compare(password, data.password)
        // 👆 compare is one of the function in bcryptjs, it takes two arguments first normal password(destructured from req.body) and second is password key in object data. In isValid we get a boolean value.

        // Step 04: If password do not match send error
        if (!isValid) {
            return res.status(401).json({ message: "Invalid Pasword!", success: false })
        }
        // Step 05: If isActive false -> Send error
        if (!data.isActive) {
            return res.status(401).json({ message: "Account blocked by Admin!", success: false })
        }

        // Step 06: If password matches then Login success
        /*
        📌 JWT Token => JSON Web Token
        1) It is like a ID Card that is given by every college and before entering the college it is checked and if verified than only the person is allowed to enter the college. 
        2) JWT Token is like a digital ID card for a user.
        - When you login, the server gives you a JWT token.
        - After that, whenever you send a request (like opening dashboard, adding todo, etc.), you send this token with it.
        - The server checks the token:
        ✔ If it is valid → You are allowed to access.
        ❌ If it is invalid or expired → You are not allowed.
        - In simple words:
        JWT token is a proof that you are logged in and authorized to use the application.
        */
        // 📌 const token = jwt.sign({ _id: data._id, name: data.name }, "jwtsecurepassword") => We are storing the JWT password in env file  
        const token = jwt.sign({ _id: data._id, name: data.name }, process.env.JWT_KEY, { expiresIn: "1d" })
        /*
        👆
        - It creates a JWT token (a secure login token)
        a) jwt.sign()
        - Function used to create a token
        b) { _id: data._id, name: data.name } 
        - This is the payload (data inside token)
        c) process.env.JWT_KEY 
        - This is the secret key (from .env)
        - Used to secure/sign the token
        - Only server knows this
        d) { expiresIn: "1d" } 
        - Token will expire in 1 day
        */

        //  👇 Sending secure cookie to pass token to frontend. 
        res.cookie("ADMIN", token, { maxAge: 1000 * 60 })
        /*
        👆
        a) res.cookie()
        - Used to send/save a cookie in the browser
        b) "ADMIN"
        - Name of the cookie
        c) token
        - Value stored in the cookie (your login token)
        d) { maxAge: 1000 * 60 }
        - Cookie will expire after:
        1000 ms = 1 sec
        1000 * 60 = 60 sec = 1 minute
        */

        res.status(200).json(
            {
                message: "User Login Success!",
                data: { name: data.name, email: data.email },
                // 👆 As it is not correct to send password to frontend which is there is data object, so we will manually send what data should be given to frontend
                // token
                // 👆 It is not secure to pass token to frontend in this way. So, we use cookie to a pass token to frontend
            }
        )
        // 👆 Passed data to Frontend
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie("ADMIN")
        // 👆 Deleting the cookie ADMIN
        res.status(200).json({ message: "User LogOut Success!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}