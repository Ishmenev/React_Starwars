import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();


  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="container stardb-app">
              <Header />
              <RandomPlanet />

              <Route path='/' 
              render={() => <h2>Welcome to SpaceWorld</h2>}
              exact/>
              <Route path='/people'
              render={() => <h2>Charachters</h2>} />
              <Route path='/people' component={PeoplePage}/>
              <Route path='/planets/'
              render={() => <h2>Planets</h2>} />
              <Route path='/planets/:id?' component={PlanetsPage}/>
              <Route path='/starships/'
              render={() => <h2>Starships</h2>} />
              <Route path='/starships' exact component={StarshipsPage}/>
              <Route path='/starships/:id' 
              render={({match}) => {
                const {id} = match.params;
                return <StarshipDetails itemId={id}/>
              }}/>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
