import React, { useState, useEffect } from 'react'

function useUsers({ id } = { id: '' }) {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(userList => userList.json())
            .then(userList => {
                setUsers(userList);
                setLoading(false);
            })
            .catch(error => console.error(error))
    }, []);



    return {
        loading,
        users
    }
}

export default useUsers;
