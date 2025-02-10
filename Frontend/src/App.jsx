
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';


function App() {
    const [tasks, setTasks] = useState([]);

    const API_BASE_URL = 'http://localhost:8080/tasks';

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch(API_BASE_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const handleAddTask = async (description) => {
        try {
            const response = await fetch(API_BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const newTask = await response.json();
            setTasks([...tasks, newTask]); 
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleMarkTaskComplete = async (taskId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${taskId}/complete`, {
                method: 'PUT',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const updatedTask = await response.json();
            setTasks(tasks.map(task => (task.id === taskId ? updatedTask : task)));
        } catch (error) {
            console.error("Error marking task complete:", error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${taskId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setTasks(tasks.filter(task => task.id !== taskId));

        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TodoForm onAddTask={handleAddTask} />
            <TodoList
                tasks={tasks}
                onComplete={handleMarkTaskComplete}
                onDelete={handleDeleteTask}
            />
        </div>
    );
}

export default App;