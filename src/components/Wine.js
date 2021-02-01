import React from 'react';
import { Link } from 'react-router-dom';


export default function Wine({wine, deleteWine}) {
    return (
        <tr>
            <td>{wine.username}</td>
            <td>{wine.winename}</td>
            <td>{wine.rating}</td>
            <td>{wine.description}</td>
            <td>{wine.date.substring(0,10)}</td>
            <td>
            <Link to={"/edit/"+wine._id}>edit</Link> | <a href="/" onClick={() => { deleteWine(wine._id) }}>delete</a>  {/*best practice is to make this a button*/}
            </td>
        </tr>
    )
}
