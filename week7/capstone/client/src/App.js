import React from 'react';
import Nav from './components/Nav'
import Output from './components/output'
import {Route, Switch} from 'react-router'
import Home from './components/Home'
import Resources from './components/resources'


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Nav />
         <Switch>
          <Route exact path='/' render={() => <Home/>} />
          <Route path='/characters' render={Output}/>
          <Route path='/resources' render={Resources}/>
         </Switch>
        
      </header>
    </div>
  );
}

export default App;
