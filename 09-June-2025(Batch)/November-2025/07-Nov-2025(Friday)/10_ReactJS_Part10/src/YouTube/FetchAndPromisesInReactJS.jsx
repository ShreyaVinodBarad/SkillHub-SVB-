import React, { useEffect, useState } from 'react'

const FetchAndPromisesInReactJS = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json() // convert response to JSON
                .then(data => setUsers(data)) // use the data
                .catch(err => console.log(err)) // handle errors
            )
    }, [])
    return (
        <div>
            <h3 className='alert alert-success w-25 mx-3 mt-3'>Users List</h3>
            <ul class="list-group my-3">
                {
                    users.map(item => <li class="list-group-item w-25 mx-3" key={item.id}>
                        {/* 
                        👆 key = unique identity for each element in a list 
                        */}
                        {item.name}
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

export default FetchAndPromisesInReactJS
/*
1) API and Methods:
a) What is an API?
- API (Application Programming Interface) is like a messenger that helps two software applications talk to each other.
- It allows one program to send or receive data from another.
- Example:
When you use a weather app, it gets data from a weather server using an API.
b) Common API Methods (HTTP Methods):
| Method | Use / Meaning                   | Example                 |
| -------| --------------------------------| ----------------------- |
| GET    | To fetch/read data from a server| Get list of users       |
| POST   | To send/add new data to a server| Add a new user          |
| PUT    | To update/replace existing data | Update full user info   |
| PATCH  | To update part of existing data | Update only user’s name |
| DELETE | To remove data from a server    | Delete a user           |
c) Important Points:
- API = Bridge between frontend (what you see) and backend (database/server).
- It uses URLs and methods to communicate.
- Data is mostly shared in JSON format.
-----------------------------------------------------------------
2) Fetch and Promises
a) What is Fetch?
- fetch() is used to get data from an API or send data to a server.
- It’s a built-in JavaScript function.
- It works with Promises to handle data loading.
b) Syntax:
fetch('https://api.example.com/data')
  .then(response => response.json())    // convert response to JSON
  .then(data => console.log(data))      // use the data
  .catch(error => console.log(error))   // handle errors
c) What is a Promise?
- A Promise represents the result of an async operation (like fetching data).
- It has 3 states:
1) Pending – waiting for result
2) Fulfilled – success
3) Rejected – error
d) Important Points:
- fetch() returns a Promise
- .then() handles success, .catch() handles error
- Use useEffect() to call fetch() when the component loads
- Always use .json() to convert API data
-----------------------------------------------------------------
*/ 