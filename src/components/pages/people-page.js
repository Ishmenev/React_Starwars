import React, { Component } from 'react';
import Row from '../row';

import SwapiService from "../../services/swapi-service";
import {
    PersonDetails,
    PersonList,
  } from '../sw-components';


export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItem: 11
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        const {selectedItem} = this.state;

        return (
            <Row
            left={<PersonList onItemSelected={this.onItemSelected}/>}
            right={<PersonDetails itemId={selectedItem} />}
            />   
        )
    }
}