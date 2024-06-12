import React from 'react'

function TodoItem({each, index, deleteTodoItem, completeTodoItem, updateTodoItem}) {
  return (
    <div>
        <li style={{textDecoration: each.complete ? 'line-through' : ''}} >{each.todo}</li>
      <div>
        <button onClick={() => completeTodoItem(index)}>Complete</button>
        <button onClick={() => updateTodoItem(index)}> Update</button>
        <button onClick={() => deleteTodoItem(index)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem;
