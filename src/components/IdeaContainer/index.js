import React from 'react';
import './main.css'

export default () => {
  const itWorks = () => {
    console.log('it works!')
  }
  return (
    <section className='idea-creation-container'>
      <h1>Generate an Idea:</h1>
      <img 
        src='https://i.ya-webdesign.com/images/lightbulb-idea-png-4.png' 
        alt='lightbulb'
        className='lightbulb'
        onClick={itWorks}
      ></img>
    </section>
  )
}