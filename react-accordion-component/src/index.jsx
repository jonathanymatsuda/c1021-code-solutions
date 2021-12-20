import React from 'react';
import ReactDOM from 'react-dom';

const languageInfo = [
  { id: 1, name: 'Hypertext Markup Language', description: 'HTML is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the web.' },
  { id: 2, name: 'Cascading Style Sheets', description: 'CSS is a style sheet langauge used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerston technology of the World Wide web alongside HTML and Javascript.' },
  { id: 3, name: 'JavaScript', description: 'JS is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      currentId: null
    };
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText() {
    if (event.target.matches('.language-name')) {
      if (Number(event.target.getAttribute('id')) === this.state.currentId) {
        this.setState({
          isClicked: false,
          currentId: null
        });
      } else {
        this.setState({
          isClicked: true,
          currentId: Number(event.target.getAttribute('id'))
        });
      }
    }
  }

  render() {
    const openClose = this.state.currentId === languageInfo.id ? '' : 'hidden';
    const language = languageInfo.map(selection =>
      <React.Fragment key={selection.id}>
        <h3 className='language-name' id={selection.id} onClick={this.toggleText}>{selection.name}</h3>
        <p className={openClose}>{selection.description}</p>
      </React.Fragment>
    );
    return (
      <div className='accordion'>
        {language}
      </div>
    );
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
