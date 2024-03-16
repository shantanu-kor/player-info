import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPlayer from './pages/AddPlayer';
import PlayerInfo from './pages/PlayerInfo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-5xl text-center p-7">Player Catalogue</h1>
      <Switch>
        <Route path="/" exact>
          <AddPlayer />
        </Route>
        <Route path="/player/:id">
          <PlayerInfo />
        </Route>
      </Switch>
    </>
  )
}

export default App
