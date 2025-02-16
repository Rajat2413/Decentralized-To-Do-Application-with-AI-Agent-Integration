import { create } from 'zustand';
import { Task, TaskStore } from '../types';

const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  
  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }],
  })),

  updateTask: (id, updatedTask) => set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    ),
  })),

  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== id),
  })),

  getTasksByStatus: (status) => {
    return get().tasks.filter((task) => task.status === status);
  },

  getCompletionRate: () => {
    const tasks = get().tasks;
    if (tasks.length === 0) return 0;
    const completedTasks = tasks.filter((task) => task.status === 'completed');
    return (completedTasks.length / tasks.length) * 100;
  },
}));

export default useTaskStore;