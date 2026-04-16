const logger = (req, res, next) => {
    /*
    👆
    is called a middleware function.
    req → request (data coming from user)
    res → response (what you send back)
    next → function to go to the next step
    1) Simple rule:
    - If a function has:
    req
    res
    next
    then it is a middleware function.
    */
    console.log("Request Recieved!")
    next()
}
module.exports = logger