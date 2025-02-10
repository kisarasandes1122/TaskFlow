// src/components/TodoForm.jsx
import React, { useState } from 'react';

function TodoForm({ onAddTask }) {
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const handleInputChange = (e) => {
        setNewTaskDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (newTaskDescription.trim() !== '') {
            onAddTask(newTaskDescription);
            setNewTaskDescription(''); 
        }
    };

    return (
        <form className="add-task" onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTaskDescription}
                onChange={handleInputChange}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button> 
        </form>
    );
}

export default TodoForm;