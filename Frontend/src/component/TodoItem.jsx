
import React from 'react';

function TodoItem({ task, onComplete, onDelete }) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.description}
            </span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;