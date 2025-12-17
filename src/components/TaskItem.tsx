import type { Task } from '../types/task';
import { Button } from './Button';
import { Check, Edit, Trash2 } from 'lucide-react';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number, completed: boolean) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;

}

export default function TaskItem({ task, onToggle, onEdit, onDelete }: TaskItemProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow p-4 transition-all hover:shadow-md mb-2 ${
        task.completed ? 'opacity-75' : ''
      }`}
    >
      <div className="flex items-start gap-3">
      <button
          aria-label="Toggle task completion"
          onClick={() => onToggle(task.id, task.completed)}
          className={`shrink-0 w-6 h-6 flex items-center justify-center border-2 rounded p-0 transition-colors ${
            task.completed ? 'bg-green-600 border-green-600' : 'border-gray-300 hover:border-green-600'
          }`}
        >
          {task.completed && <Check size={16} />}
        </button>

        <div className="flex-1 min-w-0">
          <h3
            className={`font-semibold text-gray-900 mb-1 ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {task.title}
          </h3>
          {task.description && (
            <p className="text-gray-500 text-sm">{task.description}</p>
          )}
        </div>

        <div className="shrink-0 flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onEdit(task)}
            title="Edit task"
          >
            <Edit size={16} />
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(task.id)}
            title="Delete task"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}