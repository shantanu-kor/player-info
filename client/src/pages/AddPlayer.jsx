import React from 'react'
import PlayerForm from '../components/PlayerForm';
import Search from '../components/Search';

const AddPlayer = () => {
    return (
        <React.Fragment>
            <div className="text-right">
                <Search />
            </div>
            <PlayerForm />
        </React.Fragment>
    )
}

export default AddPlayer;