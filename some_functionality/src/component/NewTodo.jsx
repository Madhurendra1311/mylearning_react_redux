import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    const addTask = () => {
        if (taskName && taskDescription) {
            const newTask = {
                id: Date.now(),
                name: taskName,
                description: taskDescription,
            };
            setTasks([...tasks, newTask]);
            setTaskName('');
            setTaskDescription('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const selectTask = (id) => {
        setSelectedTaskId(selectedTaskId === id ? null : id);
    };

    return (
        <div className="App">
            <h1>TODO List</h1>
            <div className="task-input">
                <input 
                    type="text" 
                    placeholder="Task Name" 
                    value={taskName} 
                    onChange={(e) => setTaskName(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Task Description" 
                    value={taskDescription} 
                    onChange={(e) => setTaskDescription(e.target.value)} 
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {tasks.map(task => (
                    <li 
                        key={task.id} 
                        className={selectedTaskId === task.id ? 'selected' : ''}
                        onClick={() => selectTask(task.id)}
                    >
                        <h3>{task.name}</h3>
                        <p>{task.description}</p>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
