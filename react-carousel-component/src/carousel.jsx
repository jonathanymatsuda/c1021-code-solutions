import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImagePosition: 0
    };
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick(event) {
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

  render() {
    return (
      <>
        <header>
          <div className="row text-align-center">
            <h1>LFZ Smash Carousel</h1>
          </div>
        </header>
        <div key={this.props.content[this.state.currentImagePosition].id} className="row align-items-center space">
          <i className="fas fa-chevron-circle-left fa-2x" onClick={this.handleArrowClick}></i>
          <img src={this.props.content[this.state.currentImagePosition].image} alt="Smash?!"></img>
          <i className="fas fa-chevron-circle-right fa-2x" onClick={this.handleArrowClick}></i>
        </div>
        <div className="row text-align-center mt-70">
          <div className="circle-container">
            <i circleid="0" className="fas fa-circle ml-10"></i>
            <i circleid="1" className="far fa-circle ml-10"></i>
            <i circleid="2" className="far fa-circle ml-10"></i>
            <i circleid="3" className="far fa-circle ml-10"></i>
            <i circleid="4" className="far fa-circle ml-10"></i>
          </div>
        </div>
      </>
    );
  }
}
//  <header>
//    <div class="row text-align-center">
//      <h1>LFZ Smash Carousel</h1>
//    </div>
//  </header>
//  <div class="row align-items-center space">
//    <i class="fas fa-chevron-circle-left fa-2x"></i>
//    <img class="character-image" src="images/image001.png" alt="Smash?!">
//    <i class="fas fa-chevron-circle-right fa-2x"></i>
//  </div>
// //  <div class="row text-align-center mt-70">
// //    <div class="circle-container">
// //      <i circleid="0" class="fas fa-circle ml-10"></i>
// //      <i circleid="1" class="far fa-circle ml-10"></i>
// //      <i circleid="2" class="far fa-circle ml-10"></i>
// //      <i circleid="3" class="far fa-circle ml-10"></i>
// //      <i circleid="4" class="far fa-circle ml-10"></i>
// //    </div>
// //  </div>
