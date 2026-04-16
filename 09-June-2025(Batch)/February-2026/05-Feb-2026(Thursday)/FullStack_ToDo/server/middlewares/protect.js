const jwt = require("jsonwebtoken")
/*
👆
jsonwebtoken is an external npm package
- You install it using:
npm install jsonwebtoken
*/

const protect = (req, res, next) => {
    // Step 1: Check for Cookie
    const ADMIN = req.cookies.ADMIN
    /*
    👆
    req.cookies = all cookies coming from browser
    .ADMIN = get the cookie named "ADMIN"
    const ADMIN = = store that value in a variable
    */


    // Step 2: If Cookie is not available send an Error
    if (!ADMIN) {
        return res.status(401).json({ message: "No Cookie Found!", success: false })
        // 👆 If this line runs then the code below return will not run
    }

    // Step 3: Check for Token
    jwt.verify(ADMIN, process.env.JWT_KEY, (_, decode) => {
        // 👆 _ = unused parameter (we don’t need it) Some functions give multiple values, but if you don’t need one → use _

        // Step 4: If Token is not available send an Error
        if (!decode) {
            return res.status(401).json({ message: "Invalid Token!", success: false })
        }

        // Step 5: If everything is available call next()
        next()
        // 👆 If token is valid → go to next middleware / function
    })
    /*
    👆
    jwt.verify() = checks if the token is valid or not
    ADMIN = token
    process.env.JWT_KEY = secret key used to verify token
    (decode) = result after checking token
    - If token is verified than this function will run.
    - decode has the payload of jwt.sign() i.e.; { _id: data._id, name: data.name } from login function.
    - decode has an object
    */
}
module.exports = protect