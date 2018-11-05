import React from 'react'

const ListItem = (props) => {
    const { todo, index } = props;
    return (
        <li>
            <input
                type="checkbox"
                onChange={(event) => props.toggleTodoDone(event, index)}
                checked={props.todo.done}
            />
            <span className={todo.done ? 'done' : ''}>
                {todo.title}
            </span>

            <button onClick={() => props.removeTodo(index)}>Remove</button>
        </li>
    )
}
export default ListItem;