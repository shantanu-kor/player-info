import React from 'react'
import { useHistory } from 'react-router-dom';

const AddPlayer = () => {
    const history = useHistory();

    const clickHandler = (event) => {
        event.preventDefault();
        history.push('/');
    }
    return (
        <button onClick={clickHandler} className="text-2xl m-4 p-1 rounded-lg border-2 border-white">Add New Player</button>
    )
}

export default AddPlayer;