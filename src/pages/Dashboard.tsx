import { useState } from "react"
import TaskItem from "../components/TaskItem"
import TaskModal from "../components/TaskModal"
import ConfirmModal from "../components/ConfirmModal"
import type { Task } from "../types/task"
import { Button } from "../components/Button"
import toast from "react-hot-toast"
import { CheckSquare } from "lucide-react"

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const isEditing = !!editingTask;

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const openAddModal = () => {
    setEditingTask(null);
    setModalOpen(true);
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const handleSaveTask = (title: string, description: string) => {
    if (isEditing && editingTask) {
      setTasks(tasks.map((t) => t.id === editingTask.id ? { ...t, title, description, updatedAt: new Date() } : t));
    } else {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title,
          description,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
    setModalOpen(false);
    setEditingTask(null);
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId === null) return;
    setTasks(tasks.filter(t => t.id !== deleteId));
    setDeleteId(null);
    toast.success('Task deleted');
  };

  return (
    <div className="bg-linear-to-br from-blue-50 to-gray-100 min-h-screen">

      <div className="p-4 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <CheckSquare className="text-blue-600 mr-3" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">TaskMaster</h1>
              <p className="text-sm text-gray-600">{localStorage.getItem('sessionUser')}</p>
            </div>
          </div>
          <Button variant="secondary" size="sm" onClick={()=> {}}>
            Sign Out
          </Button>
        </div>
        <Button variant="primary" onClick={openAddModal}>Add Task</Button>
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 font-medium transition-colors ${
              filter === 'all'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            All ({tasks.length})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 font-medium transition-colors ${
              filter === 'active'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Active ({tasks.filter((t) => !t.completed).length})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 font-medium transition-colors ${
              filter === 'completed'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Completed ({tasks.filter((t) => t.completed).length})
          </button>
        </div>
        {filteredTasks.length === 0 && <p>No tasks available</p>}
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={id => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))}
            onEdit={openEditModal}
            onDelete={handleDelete}
          />
        ))}
        {modalOpen && (
          <TaskModal
            title={isEditing ? "Edit Task" : "Add Task"}
            task={editingTask ?? undefined}
            onClose={() => { setModalOpen(false); setEditingTask(null); }}
            onSave={handleSaveTask}
          />
        )}
        <ConfirmModal
          open={deleteId !== null}
          message="Are you sure you want to delete this task?"
          onConfirm={confirmDelete}
          onCancel={() => setDeleteId(null)}
        />
      </div>
    </div>
  )
}
