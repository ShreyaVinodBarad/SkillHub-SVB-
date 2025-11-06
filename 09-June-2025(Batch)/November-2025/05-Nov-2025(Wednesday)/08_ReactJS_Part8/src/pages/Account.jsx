import React from 'react'

const Account = () => {
    return (
        <div>
            <h2 className="alert alert-primary text-center mt-3">Account Page</h2>
        </div>
    )
}

export default Account
/*
1) Public Pages
- These pages can be seen by everyone — even users who are not logged in.
- Example: Home page, About page, Login page, Signup page.
- Used to show general information or allow new users to join.
--------------------------------------------------------------------
2) Private Pages
- These pages can be seen only after login (authenticated users).
- Example: Dashboard, Profile, Settings, Orders page.
- Used to show personal or secure data.
- Usually protected using authentication (like JWT, tokens, etc.).
--------------------------------------------------------------------
3) In short:
- Public pages = open for all
- Private pages = only for logged-in users
--------------------------------------------------------------------
*/ 