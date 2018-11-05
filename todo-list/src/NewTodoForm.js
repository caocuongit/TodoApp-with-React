import React from 'react';

const NewTodoForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>
            <label htmlFor="newTodo">Todo List</label><br />
            <input
                type="text"
                onChange={props.newTodoChanged}
                id="newTodo"
                name="newTodo"
                size="25"
                placeholder="Task"
                value={props.newTodo}
            />
            <button type="submit">Add Task</button>

        </form>
    )
};

export default NewTodoForm;