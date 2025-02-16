import React from 'react';
import { format } from 'date-fns';
import { CheckCircle2, Clock, Tag, Trash2 } from 'lucide-react';
import { Task } from '../types';
import useTaskStore from '../store/taskStore';

interface TaskCardProps {
  task: Task;
}

const priorityColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

const statusColors = {
  'todo': 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-purple-100 text-purple-800',
  'completed': 'bg-green-100 text-green-800',
};

export default function TaskCard({ task }: TaskCardProps) {
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const handleStatusChange = () => {
    const statusOrder = ['todo', 'in-progress', 'completed'] as const;
    const currentIndex = statusOrder.indexOf(task.status);
    const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length];
    updateTask(task.id, { status: nextStatus });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
      
      <p className="text-gray-600 mb-4">{task.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {task.tags.map((tag) => (
          <span key={tag} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
            <Tag size={14} />
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-4">
        <span className={`px-2 py-1 rounded-full text-sm ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
        <span className={`px-2 py-1 rounded-full text-sm ${statusColors[task.status]}`}>
          {task.status}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock size={14} />
          <span>Due: {format(new Date(task.dueDate), 'MMM d, yyyy')}</span>
        </div>
        
        <button
          onClick={handleStatusChange}
          className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition-colors"
        >
          <CheckCircle2 size={16} />
          Update Status
        </button>
      </div>
    </div>
  );
}