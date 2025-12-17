import { Button } from './Button';
import { X } from 'lucide-react';

interface ConfirmModalProps {
  title?: string;
  message: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ title = 'Confirm', message, open, onConfirm, onCancel }: ConfirmModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close confirm modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="mb-6 text-gray-800 text-base">
          {message}
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="button" variant="danger" onClick={onConfirm}>
            Yes, Delete
          </Button>
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

