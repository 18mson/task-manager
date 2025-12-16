import type { Task } from "../types/task"

export const TaskItem = ({ task, onToggle }: { task: Task; onToggle: () => void }) => (
  <div className="flex justify-between p-2 border rounded">
    <span className={task.completed ? "line-through text-gray-400" : ""}>
      {task.title}
    </span>
    <input type="checkbox" checked={task.completed} onChange={onToggle} />
  </div>
)