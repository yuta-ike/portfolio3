import { useState } from "react"

let id = 0
const genId = () => `${id++}`

export type Task = {
  id: string
  title: string
  craetedAt: string
  createdBy: string
} & (
  | {
      state: "done"
      doneAt: string
    }
  | {
      state: "doing"
    }
  | {
      state: "todo"
    }
)

export type User = {
  id: string
  name: string
}

export const useBackend = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [users, setUsers] = useState<User[]>([])

  const handleAddUser = ({ name }: { name: string }) => {
    setUsers((users) => [...users, { name, id: genId() }])
  }

  const handleAddTask = (userId: string, { title }: { title: string }) => {
    if (!users.some(({ id }) => id === userId)) {
      throw new Error()
    }

    setTasks((tasks) => [
      ...tasks,
      { id: genId(), title, craetedAt: new Date().toISOString(), createdBy: userId, state: "todo" },
    ])
  }

  const changeTaskState = (userId: string, taskId: string, { state }: { state: Task["state"] }) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (state === "done") {
          return task.id === taskId && task.createdBy === userId
            ? { ...task, state, doneAt: new Date().toISOString() }
            : task
        } else {
          return task.id === taskId && task.createdBy === userId ? { ...task, state } : task
        }
      })
    })
  }

  return {
    database: {
      tasks,
      users,
    },
    endpoints: {
      handleAddUser,
      handleAddTask,
      changeTaskState,
    },
  }
}
