import React, { useEffect, useState } from 'react';
import './App.css';
import useTodos from './useTodos';
import useUsers from './useUsers';

const ToDos = () => {



    const { todos, loading: loadingToDos } = useTodos();
    const { users, loading: loadingUsers } = useUsers();


    if (loadingToDos || loadingUsers) {
        return <p>Cargando .. </p>
    }




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
