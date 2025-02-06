"use client"
import React, { useState } from 'react'

function TaskAddForm({tasks, setTasks, setOpen}: any) {
    const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  
  const addTask = async () => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newTask, description: newDescription, createdAt: new Date() }),
    });
    const task = await res.json();
    setTasks([...tasks, task]);
    setNewTask("");
    setNewDescription("");
    setOpen(false)
  };

  return (
    <div
    className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
     p-5 rounded-xl shadow shadow-blue-200 bg-white
     flex flex-col w-11/12 max-w-md gap-4 z-30
     '
    >
       <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Nom de la tâche..." />
      <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Description..." />
      <button onClick={addTask}>Ajouter</button>
    </div>
  )
}

export default TaskAddForm
