import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const languageInfo = [
  { id: 0, name: 'Hypertext Markup Language', description: 'HTML is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the web.' },
  { id: 1, name: 'Cascading Style Sheets', description: 'CSS is a style sheet langauge used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerston technology of the World Wide web alongside HTML and Javascript.' },
  { id: 2, name: 'JavaScript', description: 'JS is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' }
];

ReactDOM.render(<Accordion content={languageInfo}/>, document.querySelector('#root'));
