import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'

function UserList() {
    
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data)
                console.log(response.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error Loading Users Data: {error.message}</p>

    return (
        <div>
            <h1>User Data</h1>
            <ul>
                {users.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </ul>
            
        </div>
    )
}

export default UserList
