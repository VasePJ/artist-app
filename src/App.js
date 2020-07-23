import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Browse from './Components/Browse';
import ArtistsPage from './Components/ArtistsPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render (){
    return(
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Browse}/>
            <Route exact path="/ArtistsPage/:id" component={ArtistsPage} />
          </Switch>
        </div>
      </Router>
    );
  } 
}

export default App;
