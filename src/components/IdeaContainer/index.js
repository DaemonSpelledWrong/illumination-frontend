import React, {Component} from 'react';
import './main.css';

import Idea from '../Idea';

export default class IdeaContainer extends Component {

  state = {
    isClicked: false
  }

  generateIdea = () => {
    return <Idea noun={this.randomNoun()} adjective={this.randomAdjective()} verb={this.randomVerb()}/>
  }

  randomNoun = () => {
    return (this.props.allNouns[Math.floor(Math.random() * this.props.allNouns.length)].text);
  }

  randomAdjective = () => {
    return (this.props.allAdjectives[Math.floor(Math.random() * this.props.allAdjectives.length)].text);
  }

  randomVerb = () => {
    return (this.props.allVerbs[Math.floor(Math.random() * this.props.allVerbs.length)].text);
  }

  handleClick = () => {
    this.setState({ isClicked: true })
  }

  render() {
    return (
      <section className='idea-creation-container'>
        <h1>Generate an Idea:</h1>
        <img 
          src='https://i.ya-webdesign.com/images/lightbulb-idea-png-4.png'
          alt='lightbulb'
          className='lightbulb'
          onClick={this.handleClick}
        ></img>
        {
          this.state.isClicked
          ? this.generateIdea()
          : null
        }
      </section>
    )
  }
}