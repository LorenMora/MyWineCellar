import React, { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {

    const [username, setUsername] = useState('');

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };

    const submitUsername = (e) => {
        e.preventDefault();

        const user = {
            username: username,
        };

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
        .then(res =>console.log(res.data));

        setUsername('');

        window.location = '/';

    };


    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={submitUsername}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={username}
                        onChange={changeUsername}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
