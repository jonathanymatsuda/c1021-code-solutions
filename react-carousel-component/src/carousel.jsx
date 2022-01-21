import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImagePosition: 0
    };
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.currentImagePosition >= this.props.content.length - 1) {
        this.setState({ currentImagePosition: 0 });
      } else {
        this.setState({ currentImagePosition: this.state.currentImagePosition + 1 });
      }
    }, 3000);
  }

  handleArrowClick(event) {
    this.setState({ setIntervalStatus: !this.state.setIntervalStatus });
    if (event.target.className === 'fas fa-chevron-circle-right fa-2x') {
      this.setState({ currentImagePosition: this.state.currentImagePosition + 1 });
      if (this.state.currentImagePosition >= this.props.content.length - 1) {
        this.setState({ currentImagePosition: 0 });
      }
    }
    if (event.target.className === 'fas fa-chevron-circle-left fa-2x') {
      this.setState({ currentImagePosition: this.state.currentImagePosition - 1 });
      if (this.state.currentImagePosition <= 0) {
        this.setState({ currentImagePosition: this.props.content.length - 1 });
      }
    }
  }

  handleCircleClick(event) {
    const targetedCircle = Number(event.target.id);
    if (event.target.className === 'far fa-circle ml-10') {
      this.setState({ currentImagePosition: targetedCircle });
    }
  }

  render() {
    const position = this.state.currentImagePosition;
    return (
      <>
        <header>
          <div className="row text-align-center">
            <h1>LFZ Smash Carousel</h1>
          </div>
        </header>
        <div className="row align-items-center space">
          <i className="fas fa-chevron-circle-left fa-2x" onClick={this.handleArrowClick}></i>
          <img src={this.props.content[position].image} alt="Smash?!"></img>
          <i className="fas fa-chevron-circle-right fa-2x" onClick={this.handleArrowClick}></i>
        </div>
        <div className="row text-align-center mt-70">
         {this.props.content.map((buttonDistributed, index) => (
           <i className={position === index
             ? 'fas fa-circle ml-10'
             : 'far fa-circle ml-10'}
             key={buttonDistributed.id} onClick={this.handleCircleClick} id={index}></i>
         )
         )}
        </div>
      </>
    );
  }
}
