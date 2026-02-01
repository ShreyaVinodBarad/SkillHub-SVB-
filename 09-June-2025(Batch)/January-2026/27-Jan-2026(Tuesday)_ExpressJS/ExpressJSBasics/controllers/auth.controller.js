exports.signin = (req, res) => {
    console.log(req.body)
    res.json({ message: "SignIn Success!", success: true })
}

exports.signup = (req, res) => {
    res.json({ message: "SignUp Success!", success: true })
}

exports.signout = (req, res) => {
    res.json({ message: "SignOut Success!", success: true })
}