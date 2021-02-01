import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function CreateWine() {
    const [username, setUsername] = useState('');
    const [winename, setWinename] = useState('');
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data[0]) {
                setUsers(response.data.map(user => user.username));
                setUsername(response.data[0].username);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    const submitEntry = (e) => {
        e.preventDefault();

        const wine = {
            username: username,
            winename: winename,
            rating: rating,
            description: description,
            date: date
        };

        console.log(wine);

        axios.post('http://localhost:5000/wines/add', wine)
        .then(res => console.log(res.data));

        window.location = '/';

    };
    
    const changeUsername = (e) => {
        setUsername(e.target.value);
    };

    const changeWinename = (e) => {
        setWinename(e.target.value);
    };

    const changeRating = (e) => {
        setRating(e.target.value);
    };

    const changeDescription = (e) => {
        setDescription(e.target.value);
    };

    const changeDate = (e) => {
        setDate(date);
    };

    return (
        <div>
            <h3>Create Wine Log</h3>
            <form onSubmit={submitEntry}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <select
                        required
                        className="form-control"
                        value={username}
                        onChange={changeUsername}>
                        {
                            users.map(user => {
                            return <option 
                                key={user}
                                value={user}>
                                    {user}
                                </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group"> 
                    <label>Wine: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={winename}
                        onChange={changeWinename}
                        />
                </div>
                <div className="form-group">
                    <label>Rating: </label>
                    <input 
                        type="number" 
                        min='0'
                        max='10'
                        className="form-control"
                        value={rating}
                        onChange={changeRating}
                        />
                </div>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={description}
                        onChange={changeDescription}
                        />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={date}
                        onChange={changeDate}
                        />
                    </div>
                </div>
                <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
};
