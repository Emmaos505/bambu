import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import useUsers from './useUsers';


function App() {

    const history = useHistory();


    const [searchUser, setSearchUser] = useState('');
    const [found, setFound] = useState([]);
    const { users, loading } = useUsers();



    useEffect(() => {
        if (searchUser) {
            var usersFiltered = users.filter(user => user.name.toLowerCase().includes(searchUser.toLowerCase()));
            setFound(usersFiltered);
        } else {
            setFound(users)
        }
    }, [searchUser, users]);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchUser(value);
    };

    const handleClick = () => {
        history.push('/tareas');
    }


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