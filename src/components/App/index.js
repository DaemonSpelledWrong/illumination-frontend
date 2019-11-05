import React, {Component} from 'react';
import './main.css';

import Navigation from '../Navigation';
import IdeaContainer from '../IdeaContainer';

export default class App extends Component {

  componentDidMount() {
    fetch('https://wordsapiv1.p.mashape.com/words/illumination', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Mashape-Key': '9a873339a8mshded094cafd335d0p155555jsn1edc8a14e4df'
      }
    })
      .then(response => response.json())
      .then(console.log)
  }

  render() {
    return(
      <section className='App'>
        <Navigation />
        <IdeaContainer />
      </section>
    )
  }
}