import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onComplete, onDelete }) {
    return (
        <div className="todo-list">
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onComplete={onComplete}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TodoList;