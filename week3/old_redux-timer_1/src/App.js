import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {run} from './actions/run'
import {pause} from './actions/pause'


function App() {
  let time = 0
  let lastUpdate = Date.now()
  
  setInterval(() => {
    var now = Date.now()
    var dt = now - lastUpdate
    time += dt
    lastUpdate = now
  }, 1000)

  const timer = useSelector(state => state.timer)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{timer}</h1>
      <button onClick={() => dispatch(run())}>start</button>
      <button onClick={() => dispatch(pause())}>pause</button>
    </div>
  );
}

export default App;
