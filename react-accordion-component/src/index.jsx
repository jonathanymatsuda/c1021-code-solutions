import React from 'react';
import ReactDOM from 'react-dom';

// const languageInfo = [
//   { name: 'Hypertext Markup Language', description: 'HTML is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the web.' },
//   { name: 'Cascading Style Sheets', description: 'CSS is a style sheet langauge used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerston technology of the World Wide web alongside HTML and Javascript.' },
//   { name: 'JavaScript', description: 'JS is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' }
// ];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  render() {
    return <p>Test</p>;
  //   const language = languageInfo.map(selection =>
  //     <React.Fragment key={languageInfo.name}>
  //       <h3>{languageInfo.name}</h3>
  //       <p>{languageInfo.description}</p>
  //     </React.Fragment>
  //   );
  //   return (
  //     <div className='accordion'>
  //       {language}
  //     </div>
  //   );
  // }
  }
}

ReactDOM.render(<Accordion/>, document.querySelector('#root'));

/* <div class="accordion">
  <h3>Hypertext Markup Language</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dignissimos in reiciendis enim expedita accusamus
    aspernatur incidunt iure quas maiores necessitatibus a? Quaerat cumque ex voluptates porro impedit libero in!</p>
  <h3>Cascading Style Sheets</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia nam! Ut alias cupiditate quisquam illum
    cum voluptatibus facere sapiente sequi nemo rerum eaque, natus soluta dolores, mollitia aut ea.</p>
  <h3>JavaScript</h3>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse minus, nisi illum temporibus fuga iure labore
    minima asperiores exercitationem, autem earum error obcaecati repellendus numquam maxime doloremque hic illo
    corrupti?</p>
</div> */
