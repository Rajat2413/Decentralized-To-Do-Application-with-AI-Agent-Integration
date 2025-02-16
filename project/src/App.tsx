import React from 'react';
import { Layout, ListChecks } from 'lucide-react';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import Analytics from './components/Analytics';
import useTaskStore from './store/taskStore';

function App() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <ListChecks className="text-indigo-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Layout size={24} className="text-indigo-600" />
            Analytics Dashboard
          </h2>
          <Analytics />
        </div>

        <div className="mb-6">
          <TaskForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;