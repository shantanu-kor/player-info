import React, { useRef } from 'react'

const PlayerForm = () => {
    const nameRef = useRef();
    const dateOfBirthRef = useRef();
    const photoUrlRef = useRef();
    const birthPlaceRef = useRef();
    const careerRef = useRef();
    const matchesRef = useRef();
    const scoreRef = useRef();
    const fiftiesRef = useRef();
    const centuriesRef = useRef();
    const wicketsRef = useRef();
    const averageRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const dateOfBirth = dateOfBirthRef.current.value;
        const photoUrl = photoUrlRef.current.value;
        const birthPlace = birthPlaceRef.current.value;
        const career = careerRef.current.value;
        const matches = matchesRef.current.value;
        const score = scoreRef.current.value;
        const fifties = fiftiesRef.current.value;
        const centuries = careerRef.current.value;
        const wickets = wicketsRef.current.value;
        const average = averageRef.current.value;

        fetch('http://localhost:3000/player/add-player', {
            method: "POST",
            body: JSON.stringify({ name, dateOfBirth, photoUrl, birthPlace, career, matches, score, fifties, centuries, wickets, average }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        nameRef.current.value = '';
        dateOfBirthRef.current.value = '';
        photoUrlRef.current.value = '';
        birthPlaceRef.current.value = '';
        careerRef.current.value = '';
        matchesRef.current.value = '';
        scoreRef.current.value = '';
        fiftiesRef.current.value = '';
        centuriesRef.current.value = '';
        wicketsRef.current.value = '';
        averageRef.current.value = '';
        
    };

    return (
        <form className="text-center text-2xl border-2 mx-[450px]" onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" ref={nameRef} />
            <br />
            <label htmlFor="dob">Date of Birth</label>
            <br />
            <input type="text" id="dob" ref={dateOfBirthRef} />
            <br />
            <label htmlFor="photo">Photo URL</label>
            <br />
            <input type="text" id="photo" ref={photoUrlRef} />
            <br />
            <label htmlFor="place">Birth Place</label>
            <br />
            <input type="text" id="place" ref={birthPlaceRef} />
            <br />
            <label htmlFor="career">Career</label>
            <br />
            <textarea rows="5" cols="20" id="career" ref={careerRef} />
            <br />
            <label htmlFor="matches">Matches</label>
            <br />
            <input type="number" id="matches" ref={matchesRef} />
            <br />
            <label htmlFor="score">Score</label>
            <br />
            <input type="number" id="score" ref={scoreRef} />
            <br />
            <label htmlFor="fifties">Fifties</label>
            <br />
            <input type="number" id="fifties" ref={fiftiesRef} />
            <br />
            <label htmlFor="centuries">Centuries</label>
            <br />
            <input type="number" id="centuries" ref={centuriesRef} />
            <br />
            <label htmlFor="wickets">Wickets</label>
            <br />
            <input type='number' id="wickets" ref={wicketsRef} />
            <br />
            <label htmlFor="average">Average</label>
            <br />
            <input type="number" id="average" ref={averageRef} />
            <br />
            <button type="submit" className="text-2xl m-4 p-1 rounded-lg border-2 border-white">Submit</button>
        </form>
    )
}

export default PlayerForm;