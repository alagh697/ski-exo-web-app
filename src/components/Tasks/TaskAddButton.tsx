"use client"
import React, { useState } from 'react'
import TaskAddForm from './TaskAddForm'

function TaskAddButton({tasks, setTasks}: any) {
    const [open, setOpen] = useState(false)
  return (
    <>
      <button
      onClick={() => setOpen(true)}
        className='py-2 px-4 rounded-xl bg-blue-100 hover:shadow-blue-300 shadow shadow-black:10'
        >
            {`Add task`}
        </button>

        {open &&
        <>
        <div
        onClick={() => setOpen(false)}
        className='w-screen h-screen fixed top-0 left-0 bg-black/20 z-20'
        />
        <TaskAddForm
        tasks={tasks}
        setTasks={setTasks}
        setOpen={setOpen}
        />
        </>
        }
    </>
  )
}

export default TaskAddButton
