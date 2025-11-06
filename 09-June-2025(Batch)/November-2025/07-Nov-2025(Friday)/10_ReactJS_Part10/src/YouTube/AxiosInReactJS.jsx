import axios from 'axios'
import React, { useEffect } from 'react'

const AxiosInReactJS = () => {
    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                // console.log(res)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [])

    // Using async-await 👇
    const getData1 = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData1()
    }, [])

    return (
        <div>
        </div>
    )
}

export default AxiosInReactJS
/*
1) Axios:
a) What is Axios?
- Axios is a JavaScript library used in React to fetch data from an API (backend/server) or to send data to it.
- It helps us make HTTP requests easily (like GET, POST, PUT, DELETE).
b) Why use Axios?
- Easier to use than the built-in fetch()
- Automatically converts data (JSON)
- Supports error handling
- Works with both frontend and backend
c) Installation
npm install axios
d) Import
import axios from 'axios'
e) Main Points:
- axios.get() → To get data
- axios.post() → To send data
- .then() → Runs when request is successful
- .catch() → Runs when there’s an error
f) Difference Between Axios and Fetch
- In ReactJS, both Axios and Fetch are used to call APIs (get data from the server or send data).
a) Fetch
- It is built-in JavaScript function (no need to install).
- It returns a Promise, so we use .then() or async/await.
- We must manually convert the response to JSON using res.json().
- It does not handle errors automatically — you must check response status yourself.
b) Axios
- It is an external library (we install using npm install axios).
- It automatically converts response to JSON — no need for res.json().
- It has better error handling and simpler syntax.
- It allows easy use of interceptors, headers, and cancel requests.
-----------------------------------------------------------------
*/ 