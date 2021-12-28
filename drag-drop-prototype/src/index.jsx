import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const kanbanList = [
  {
    columnId: 1,
    columnOrder: 0,
    name: 'To Do',
    todos: [
      {
        todoId: 1,
        columnId: 1,
        sortOrder: 0,
        task: 'Finish React Challenges'
      }
    ]
  },
  {
    columnId: 2,
    columnOrder: 1,
    name: 'In Progress',
    todos: [
      {
        todoId: 2,
        columnId: 2,
        sortOrder: 0,
        task: 'Get a job'
      },
      {
        todoId: 6,
        columnId: 2,
        sortOrder: 1,
        task: 'Feature List'
      }
    ]
  },
  {
    columnId: 3,
    columnOrder: 2,
    name: 'Done',
    todos: [
      {
        todoId: 3,
        columnId: 3,
        sortOrder: 0,
        task: 'Finish Planning'
      },
      {
        todoId: 4,
        columnId: 3,
        sortOrder: 1,
        task: 'Revise Resume'
      },
      {
        todoId: 5,
        columnId: 3,
        sortOrder: 2,
        task: 'Study Closures'
      }
    ]
  }
];

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid black;
  padding: 10px;
  `;

class Todo extends React.Component {
  render() {
    return (
    <Draggable draggableId={`todo-${this.props.todo.todoId}`} index={this.props.todo.todoId} type="task">
       {provided => (
          <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
             {this.props.todo.task} DRAGGABLE
          </li>
       )}
    </Draggable>
    );
  }
}

class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={`column-${this.props.column.columnId}`} index={this.props.index} type="column">
        {provided => (
          <div className="cards" {...provided.draggableProps} ref={provided.innerRef}>DRAGGABLE
            <h3 {...provided.dragHandleProps} >{this.props.column.name}</h3>
            <Droppable droppableId={`column-${this.props.column.columnId}`} type="task">
              {provided => (
                <ul {...provided.droppableProps} ref={provided.innerRef}> DROPPABLE
                  {this.props.column.todos.map(todo =>
                    <Todo ref={provided.innerRef} key={todo.todoId} todo={todo} index={todo.todoId} />
                  )}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    );
  }
}

class DragApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kanbanList
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    const { destination, source, type } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (type === 'column') {
      const [newColumnOrder] = kanbanList.splice(source.index, 1);
      kanbanList.splice(destination.index, 0, newColumnOrder);
      this.setState({ kanbanList: this.state.kanbanList });
    }
    // Being able to drag and drop from columns and between columns: (pseudocode)
    // Find current index of the column we dragged from - fromColumn
    // Find current index of column we dragged to - toColumn
    // Get the drag source column
    // Get the current todos array from the drag source column
    // Get the drag desitnation column
    // Get the current todos array from the drag destination column
    // Splice source todos array at source index for 1 element and assign spliced item to variable todo
    // Splice variable todo into the destination todo array at destination index
    // Call setState kanbanList to this.state.kanbanList
    const fromColumnIndex = this.state.kanbanList.findIndex(column => {
      return source.droppableId === column.columnId.toString();
    });

    const toColumnIndex = this.state.kanbanList.findIndex(column => {
      return destination.droppableId === column.columnId.toString();

    });
    const fromColumn = kanbanList[fromColumnIndex];
    const toColumn = kanbanList[toColumnIndex];
    const fromTodos = fromColumn.todos;
    const toTodos = toColumn.todos;
    const [targetTodo] = fromTodos.splice(source.index, 1);
    toTodos.splice(destination.index, 0, targetTodo);
    this.setState({ kanbanList: this.state.kanbanList });
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd} onBeforeDragStart={this.onBeforeDragStart}>DRAGDROPCONTEXT
        <Droppable droppableId="anywhere" direction="horizontal" type="column">
          {provided => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>DROPPABLE
              {kanbanList.map((column, index) => {
                const tasks = column.todos.map(todo => todo.task);
                return <Column key={column.columnId} column={column} tasks={tasks} index={index} />;
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<DragApp />, document.querySelector('#root'));
