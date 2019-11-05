import React from 'react';
import './main.css'

export default ({noun, adjective, verb}) => (
  <p className='idea'>
    {verb} {adjective} {noun}
  </p>
)