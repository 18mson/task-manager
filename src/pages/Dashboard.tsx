import { useState } from "react"
import { TaskItem } from "../components/TaskItem"
import type { Task } from "../types/task"


export default function Dashboard() {
const [tasks, setTasks] = useState<Task[]>([])


const addTask = () => {
setTasks([...tasks, { id: Date.now(), title: "New Task", completed: false }])
}


return (
<div className="p-4 max-w-md mx-auto">
<button onClick={addTask}>Add Task</button>
{tasks.length === 0 && <p>No tasks available</p>}
{tasks.map(task => (
<TaskItem
key={task.id}
task={task}
onToggle={() =>
setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t))
}
/>
))}
</div>
)
}