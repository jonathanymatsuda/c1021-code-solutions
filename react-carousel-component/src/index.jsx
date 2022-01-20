import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const smashCharacters = [
  { id: 0, image: '../dist/images/image001.png' },
  { id: 1, image: '../dist/images/image002.png' },
  { id: 2, image: '../dist/images/image003.png' },
  { id: 3, image: '../dist/images/image004.png' },
  { id: 4, image: '../dist/images/image005.png' }
];

ReactDOM.render(<Carousel content={smashCharacters} />, document.querySelector('#root'));
