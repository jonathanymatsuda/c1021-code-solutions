import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const targetedId = Number(event.target.getAttribute('id'));
    if (event.target.className === 'language-name') {
      if (this.state.currentId === targetedId) {
        this.setState({ currentId: null });
      } else {
        this.setState({ currentId: targetedId });
      }
    }
  }

  render() {
    const language = this.props.content.map(selection =>
      <React.Fragment key={selection.id}>
        <h3 className='language-name' id={selection.id} onClick={this.handleClick}>{selection.name}</h3>
        <p className={this.state.currentId === selection.id ? '' : 'hidden'}>{selection.description}</p>
      </React.Fragment>
    );
    return (
      <div className='accordion'>
        {language}
      </div>
    );
  }
}
