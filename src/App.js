import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import useUsers from './useUsers';


function App() {

    const history = useHistory();

    //const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState('');
    //const [loading, setLoading] = useState(false);
    const [found, setFound] = useState([]);
    const { users, loading } = useUsers();



    /*     useEffect(() => {
            setLoading(true);
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(userList => userList.json())
                .then(userList => {
                    setUsers(userList);
                    setFound(userList);
                    setLoading(false);
                })
                .catch(error => console.error(error))
    
    
        }, []); */


    useEffect(() => {

        //setUsers(usuarios);
        setFound(users);

        /*  useUsers()
         .then(users => console.log(users)) */




        /* fetch('https://jsonplaceholder.typicode.com/users')
            .then(userList => userList.json())
            .then(userList => {
                setUsers(userList);
                setFound(userList);
                setLoading(false);
            })
            .catch(error => console.error(error)) */


    }, [users]);
    // sin esta dependencia no consologuea arriba

    useEffect(() => {
        if (searchUser) {
            var usersFiltered = users.filter(user => user.name.toLowerCase().includes(searchUser.toLowerCase()));
            setFound(usersFiltered);
        } else {
            setFound(users)
        }
    }, [searchUser]);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchUser(value);
    };

    const handleClick = () => {
        history.push('/tareas');
    }

    /* const handleSubmit = (e) => {
        e.preventDefault();
        if (searchUser) {
            setLoading(true);
            var usersFiltered = users.filter(user => user.name.toLowerCase().includes(searchUser.toLowerCase()));
            setUsers(usersFiltered);
            setLoading(false);
        } else return;
    } */

    return (
        <div>
            <form className="form_list" /* onSubmit={handleSubmit} */>
                <input value={searchUser} onChange={handleChange} placeholder="Search User ..."></input>
            </form>
            { loading ?
                <p className="loading">Loading ...</p>
                :
                <ul className="list_users" >
                    {found && found.map(user => (
                        <li key={user.id} >
                            <a href="">{user.name}</a>
                        </li>
                    ))}
                </ul>
            }
            <div className="btn_container">
                <button onClick={handleClick} className="btn">Tareas</button>
            </div>
        </div>
    )
};



export default App;