import React from 'react'
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {run} from './actions/run'
import {pause} from './actions/pause'
import {reset} from './actions/reset'

function App() {

  const timer = useSelector(state => state.timer)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{timer.time}</h1>
      <button onClick={() => dispatch(run())}>start</button>
      <button onClick={() => dispatch(pause())}>pause</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
