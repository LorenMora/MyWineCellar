import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wine from './Wine';

export default function WineList() {

    const [wines, setWines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/wines/')
        .then(response => {
            setWines(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const deleteWine = (id) => {
        axios.delete('http://localhost:5000/wines/'+ id)
        .then(response => {
            console.log(response.data)});

        setWines(wines.filter(el => el._id !== id));
    };

    const wineList = () => {
        return wines.map(wine => {
            return <Wine wine={wine} deleteWine={deleteWine} key={wine._id} />
        })
    }

    return (
        <div>
            <h3>Logged Wines</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Username</th>
                    <th>Wine</th>
                    <th>Rating</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {wineList()}
                </tbody>
                </table>
        </div>
    )
}
