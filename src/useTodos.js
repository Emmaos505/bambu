import React, { useState, useEffect } from 'react';

function useTodos({ limit } = { limit: 21 }) {

    const [todos, setToDos] = useState([]);

    useEffect(() => {
        let primerasTareas = [];
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(todos => todos.json())
            .then(todos => {
                todos.forEach((todo, index) => {
                    if (index < limit) primerasTareas.push(todo)
                });
                setToDos(primerasTareas);
            }
            )
            .catch(error => console.error(error))

        /* fetch('https://jsonplaceholder.typicode.com/users')
            .then(userList => userList.json())
            .then(userList => {
                setUsers(userList);

            })
            .catch(error => console.error(error)) */
    }, []);




    return {
        todos
    }
}

export default useTodos



