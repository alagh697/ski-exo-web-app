"use client"
import React, { useEffect, useState } from 'react'
import TasksListItem from './TasksListItem'
import TaskAddButton from './TaskAddButton'

function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("/api/tasks").then((res) => res.json()).then(setTasks);
      }, []);

  return (
    <section
    className='min-h-96 w-11/12 mx-auto py-12 flex flex-col gap-10'
    >
        <div
        className='flex w-full justify-between items-center'
        >
        <h2
        className='text-2xl uppercase font-bold'
        >
            {`To do List`}
        </h2>

        <TaskAddButton
        tasks={tasks}
setTasks={setTasks}

        />
        </div>
        

        <ul
        className='flex flex-wrap gap-6 w-full'
        >
           {tasks && tasks.length > 0 ?
tasks?.map((task:any) =>
<TasksListItem
key={task?.id}
task={task}
tasks={tasks}
setTasks={setTasks}
/>
)
:
<p
className='italic text-sm'
>
    {`Aucunes tâches à effectuer!`}
</p>
        }
            
        </ul>
    </section>
  )
}

export default TasksList
