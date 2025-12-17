import { useState, type FormEvent, useEffect } from 'react';
import type { Task } from '../types/task';
import { Button } from './Button';
import Input from './Input';
import { X } from 'lucide-react';

interface TaskModalProps {
  title: string;
  task?: Task;
  onClose: () => void;
  onSave: (title: string, description: string) => void;
}

export default function TaskModal({ title, task, onClose, onSave }: TaskModalProps) {
  const [taskTitle, setTaskTitle] = useState(task?.title || '');
  const [description, setDescription] = useState((task as Task)?.description || '');
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!taskTitle.trim()) {
      setError('Task title is required');
      return;
    }

    onSave(taskTitle.trim(), description.trim());
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Task Title"
            placeholder="Enter task title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            error={error}
            autoFocus
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter task description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="submit">
              Save Task
            </Button>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

