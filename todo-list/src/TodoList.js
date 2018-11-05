import React from 'react'
import ListItem from './ListItem';

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo, index) => {
                return (
                    <ListItem
                        key={index}
                        todo={todo}
                        index={index}
                        toggleTodoDone={props.toggleTodoDone}
                        removeTodo={props.removeTodo}
                    />)
            })}
        </ul>
    )
};

export default TodoList;