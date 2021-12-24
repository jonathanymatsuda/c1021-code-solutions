// Using react-beautiful-dnd
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

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 5px;
  position: absolute;
  margin-left: 16px;
  margin-top: 13px
  `;

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
    // Being able to drag and drop columns:
    // Find current index of column we dragged
    // Find current index of column we will drag to
    //
    if (type === 'column') {
      const [newColumnOrder] = kanbanList.splice(source.index, 1);
      kanbanList.splice(destination.index, 0, newColumnOrder);
      this.setState({ kanbanList: this.state.kanbanList });
    }

    const fromColumnIndex = this.state.kanbanList.findIndex(column => {
      return source.droppableId === column.columnId.toString();
    });

    const toColumnIndex = this.state.kanbanList.findIndex(column => {
      return destination.droppableId === column.columnId.toString();

    });
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
    const fromColumn = kanbanList[fromColumnIndex];
    const toColumn = kanbanList[toColumnIndex];
    const fromTodos = fromColumn.todos;
    const toTodos = toColumn.todos;
    const [targetTodo] = fromTodos.splice(source.index, 1);
    toTodos.splice(destination.index, 0, targetTodo);
    this.setState({ kanbanList: this.state.kanbanList });
  }

  render() {
    const kanRender = kanbanList.map((column, index) =>
      <Draggable key={column.columnId} draggableId={`${column.columnId}`} index={index}>
        {provided => (
          <div {...provided.draggableProps} ref={provided.innerRef}>
           <Droppable droppableId={`${column.columnId}`} key={column.columnId} type='task'>
             {(provided, snapshot) => (
               <ul className="cards" ref={provided.innerRef} {...provided.droppableProps}>
                  <h3>{column.name}</h3>
                 {column.todos.map((todo, index) =>
                   <Draggable draggableId={`${todo.todoId}`} key={todo.todoId} index={index}>
                     {(provided, snapshot) => (
                       <li className='todoItem' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                         {todo.task}
                       </li>
                     )}
                   </Draggable>
                 )}
                 {provided.placeholder}
               </ul>
             )}
           </Droppable>
            <Handle {...provided.dragHandleProps} />
         </div>
        )}
      </Draggable>
    );
    return (
    <DragDropContext onDragEnd={this.onDragEnd}>
      <Droppable droppableId='all-columns' direction='horizontal' type='column'>
        {provided => (
          <div className='board' {...provided.droppableProps} ref={provided.innerRef}>
            {kanRender}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    );
  }
}
ReactDOM.render(<DragApp />, document.querySelector('#root'));
