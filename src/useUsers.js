import { useState, useEffect } from 'react'

function useUsers({ id } = { id: '' }) {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(userList => userList.json())
            .then(userList => {
                setUsers(userList);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                setError(error)
            })
    }, []);



    return {
        loading,
        users,
        error
    }
}

export default useUsers;
