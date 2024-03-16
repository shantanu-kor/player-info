import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const playerRef = useRef();
    const history = useHistory();
    const submitHandler = (event) => {
        event.preventDefault();
        const playerName = playerRef.current.value.toLowerCase();
        let id = null;
        fetch('http://localhost:3000/player/get-players')
            .then(res => res.json())
            .then(data => {
                for (let i of data) {
                    if(i.name.toLowerCase() === playerName) {
                        id = i.id;
                        break;
                    }
                }
                return id;
            })
            .then(id => {
                if (id) {
                    history.push(`/player/${id}`);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Search Player" ref={playerRef} className="text-2xl m-4 p-1" />
            <button type="submit" className="text-2xl m-4 p-1 rounded-lg border-2 border-white">Search</button>
        </form>
    )
}
    ;
export default Search;