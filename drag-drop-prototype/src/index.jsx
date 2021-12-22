// Using react-draggable
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

const kanbanList = [
  { id: 1, name: 'To Do', description: 'Finish React Challenges' },
  { id: 2, name: 'In progress', description: 'Get a job' },
  { id: 3, name: 'Done', description: 'Finish Planning' }
];

class Drag extends React.Component {
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
    const taskRender = kanbanList.map(selection =>
      <React.Fragment key={selection.id}>
        <span className='language-name' id={selection.id} onClick={this.toggleText}>{selection.name}
          <Draggable><p>{selection.description}</p></Draggable>
        </span>
      </React.Fragment>
    );
    return (
      <div className='accordion'>
        {taskRender}
      </div>
    );
  }
}

ReactDOM.render(<Drag />, document.querySelector('#root'));

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
