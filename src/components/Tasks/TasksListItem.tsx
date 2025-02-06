import { format } from 'date-fns'
import React from 'react'

function TasksListItem({task, tasks, setTasks}: any) {

    const deleteTask = async () => {
        await fetch("/api/tasks", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: task.id }),
        });
        setTasks(tasks.filter((t: any) => t.id !== task.id));
      };
  return (
    <li
    className='rounded-xl bg-black/5 p-3 shadow shadow-blue-200/50
    flex w-72 justify-between items-start
    '
    >
      <div
      className='flex flex-col gap-2 justify-between flex-1 h-full'
      >
        <strong
        className='text-lg '
        >
            {task?.name}
        </strong>

        <p>
            {task?.description}
        </p>

        <span
        className='text-xs'
        >
            {format(task?.createdAt || new Date(), "dd/MM/yyyy HH:mm")}
        </span>
      </div>

      <div>
        <button
        onClick={deleteTask}
        className='w-8 h-8 bg-red-500/50 p-1 rounded-xl uppercase font-bold
        flex justify-center items-center hover:bg-red-700 text-white
        '
        >
            {`X`}
        </button>
      </div>
    </li>
  )
}

export default TasksListItem
