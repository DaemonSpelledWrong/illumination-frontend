import React, {Component} from 'react';
import './main.css';

import Navigation from '../Navigation';
import IdeaContainer from '../IdeaContainer';

export default class App extends Component {

  state = {
    nouns: [],
    adjectives: [],
    verbs: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/nouns')
      .then(response => response.json())
      .then(nouns => this.setState({ nouns }))
    fetch('http://localhost:3000/adjectives')
      .then(response => response.json())
      .then(adjectives => this.setState({ adjectives }))
    fetch('http://localhost:3000/verbs')
      .then(response => response.json())
      .then(verbs => this.setState({ verbs }))
  }

  render() {
    const {nouns, adjectives, verbs} = this.state
    return(
      <section className='App'>
        <Navigation />
        {nouns.length > 0 && verbs.length > 0 && adjectives.length > 0 
          ? <IdeaContainer
              allNouns={nouns}
              allAdjectives={adjectives}
              allVerbs={verbs}
            />
            : null
        }
      </section>
    )
  }
}