// Using react-draggable
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

const kanbanList = [
  {
    columnId: 1,
    name: 'To Do',
    tasks: [
      {
        todoId: 1,
        sortOrder: 1,
        task: 'Finish React Challenges'
      }
    ]
  },
  {
    columnId: 2,
    name: 'In Progress',
    tasks: [
      {
        todoId: 2,
        sortOrder: 1,
        task: 'Get a job'
      }
    ]
  },
  {
    columnId: 3,
    name: 'Done',
    tasks: [
      {
        todoId: 3,
        sortOrder: 1,
        task: 'Finish Planning'
      },
      {
        todoId: 4,
        sortOrder: 2,
        task: 'Revise Resume'
      },
      {
        todoId: 5,
        sortOrder: 3,
        task: 'Study Closures'
      }
    ]
  }
];

class Drag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodoId: null,
      sortOrder: null
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handleDrag() {
    const clickedTodo = parseInt(event.target.closest('.todoItem').getAttribute('id'));
    if (this.state.currentTodoId !== clickedTodo) {
      this.setState({
        currentTodoId: clickedTodo,
        sortOrder: null
      });
    }
  }

  handleStop() {

  }

  render() {
    const kanRender =
     kanbanList.map(column =>
       <ul className="cards" key={column.columnId}>
        <h3 >{column.name}</h3>
          {column.tasks.map(name =>
          <Draggable key={name.todoId} bounds="parent" onDrag={this.handleDrag} onStop={this.handleStop}>
          <li className='todoItem' id={name.todoId} sortid={name.sortOrder}>{name.task}</li>
          </Draggable>
          )}
      </ul>
     );
    return (
      <div className='board'>
        {kanRender}
      </div>
    );
  }
}

ReactDOM.render(<Drag />, document.querySelector('#root'));