import React, { useEffect, useState } from 'react';
import './App.css';
import useTodos from './useTodos';
import useUsers from './useUsers';

const ToDos = () => {


    //const [todos, setToDos] = useState([]);
    //const [users, setUsers] = useState([]);
    //const { todos } = useTodos({ limit: 2 });
    const { todos } = useTodos();
    const { users } = useUsers();


    /* useEffect(() => {
        let primerasTareas = [];
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(todos => todos.json())
            .then(todos => {
                todos.forEach((todo, index) => {
                    if (index < 21) primerasTareas.push(todo)
                });
                setToDos(primerasTareas);
            }
            )
            .catch(error => console.error(error))

         fetch('https://jsonplaceholder.typicode.com/users')
            .then(userList => userList.json())
            .then(userList => {
                setUsers(userList);

            })
            .catch(error => console.error(error)) 
    }, []); */




    return (
        <div className="tarea_container" >
            {todos && todos.map(todo => {
                let usuarioCorrespondiente = users.find(user => user.id === todo.userId);
                //console.log("haber", usuarioCorrespondiente);
                return (
                    <div className="tarea">
                        <p>{usuarioCorrespondiente && usuarioCorrespondiente.name}</p>
                        <p>{todo.title}</p>
                        <p>{`Estado: ${todo.completed}`}</p>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default ToDos
