import React from 'react'
import PlayerDetails from '../components/PlayerDetails';
import Search from '../components/Search';
import AddPlayer from '../components/AddPlayer';

const PlayerInfo = () => {
    return (
        <React.Fragment>
            <div className="text-right">
                <Search />
                <AddPlayer />
            </div>
            <PlayerDetails />
        </React.Fragment>
    )
}

export default PlayerInfo;