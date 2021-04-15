import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState('');
    const [loading, setLoading] = useState(false);
    const [found, setFound] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(userList => userList.json())
            .then(userList => {
                setUsers(userList);
                setFound(userList);
                setLoading(false);
            })
            .catch(error => console.error(error))
    }, []);


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
        </div>
    )
};



export default App;