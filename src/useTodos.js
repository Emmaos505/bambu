import React, { useState, useEffect } from 'react';

function useTodos({ limit } = { limit: 21 }) {

    const [todos, setToDos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let primerasTareas = [];
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(todos => todos.json())
            .then(todos => {
                todos.forEach((todo, index) => {
                    if (index < limit) primerasTareas.push(todo)
                });
                setToDos(primerasTareas);
                setLoading(false);
            }
            )
            .catch(error => {
                console.error(error);
                setLoading(false);
                setError(error);
            })

        /* fetch('https://jsonplaceholder.typicode.com/users')
            .then(userList => userList.json())
            .then(userList => {
                setUsers(userList);

            })
            .catch(error => console.error(error)) */
    }, []);




    return {
        todos,
        error,
        loading
    }
}

export default useTodos



