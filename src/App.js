import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

// Pages
import home from './pages/home';
import periodicTable from './pages/periodicTable';
import {formula} from './pages/formula';
import {about} from './pages/about'

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/periodic' component={periodicTable} />
          <Route exact path='/formula' component={formula}/>
          <Route exact path='/about' component={about}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
