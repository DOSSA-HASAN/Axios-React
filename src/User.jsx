import React from 'react'

function User({ user }) {

    
    return (
        <div>
            <li>
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>City: {user.address.city}</p>
                <p>Stree Address: {user.address.street}</p>
                <p>ZIP Code: {user.address.zipcode}</p>
            </li>
        </div>
    )
}

export default User
