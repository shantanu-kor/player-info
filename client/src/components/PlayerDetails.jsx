import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const PlayerDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const [data, setData] = useState(null);
    fetch(`http://localhost:3000/player/get-player/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(err => console.log(err));

    const clickHandler = (event) => {
        event.preventDefault();
        history.push({ pathname: '/', state: data })

    };
    return (
        <div className="text-2xl text-center">
            {data &&
                <div>
                    <h1 className="text-3xl">{data.name}</h1>
                    <img height="250px" width="250px" className="mx-auto my-4" src={data.photoUrl} alt={data.name} />
                    <div>Career :</div>
                    <div className="text-justify mx-[250px]">{data.career}</div>
                    <div className="my-4">
                        <h2>Date Of Birth : {data.dateOfBirth}</h2>
                        <h2>Birth Place : {data.birthPlace}</h2>
                    </div>
                    <div className="my-4">
                        <h2>Matches : {data.matches}</h2>
                        <h2>Score : {data.score}</h2>
                        <h2>Fifties : {data.fifties}</h2>
                        <h2>Centuries : {data.centuries}</h2>
                        <h2>Wickets : {data.wickets}</h2>
                        <h2>Average : {data.average}</h2>
                    </div>
                    <button onClick={clickHandler} className="text-2xl m-4 p-1 rounded-lg border-2 border-white">Edit Details</button>
                </div>
            }
        </div>
    )
}

export default PlayerDetails;