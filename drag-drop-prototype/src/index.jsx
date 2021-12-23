// Using react-beautiful-dnd
import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const kanbanList = [
  {
    columnId: 1,
    columnOrder: 1,
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
    columnOrder: 2,
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
    columnOrder: 3,
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

class DragApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kanbanList
    };
  }

  onDragEnd(result) {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const column = this.state.kanbanList[source.droppableId];
    const newTaskIds = Array.from(column.newTaskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    const newState = {
      ...this.state,
      ...this.state.columns,
      [newColumn.id]: newColumn
    };
    this.setState({ newState });
  }

  render() {
    const kanRender = kanbanList.map(column =>
      <Droppable droppableId={`${column.columnId}`} key={column.columnId}>
        {provided => (
        <ul className="cards" ref={provided.innerRef} {...provided.droppableProps}>
          <h3>{column.name}</h3>
          {column.tasks.map((taskName, index) =>
            <Draggable draggableId={`${taskName.todoId}`} key={taskName.todoId} index={index}>
              {provided => (
              <li className='todoItem' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                {taskName.task}
              </li>
              )}
            </Draggable>
          )}
          {provided.placeholder}
        </ul>
        )}
      </Droppable>
    );
    return (
    <DragDropContext onDragEnd={this.onDragEnd}>
      <div className='board'>
        {kanRender}
      </div>
    </DragDropContext>
    );
  }
}

ReactDOM.render(<DragApp />, document.querySelector('#root'));
