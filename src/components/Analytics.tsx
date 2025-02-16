import React from 'react';
import { PieChart, BarChart2, TrendingUp } from 'lucide-react';
import useTaskStore from '../store/taskStore';

export default function Analytics() {
  const tasks = useTaskStore((state) => state.tasks);
  const completionRate = useTaskStore((state) => state.getCompletionRate());
  
  const priorityDistribution = tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statusDistribution = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <PieChart className="text-indigo-600" size={24} />
          <h3 className="text-lg font-semibold">Completion Rate</h3>
        </div>
        <div className="flex items-center justify-center h-32">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="3"
                strokeDasharray={`${completionRate}, 100`}
              />
              <text x="18" y="20.35" className="text-3xl font-bold" textAnchor="middle">
                {Math.round(completionRate)}%
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <BarChart2 className="text-indigo-600" size={24} />
          <h3 className="text-lg font-semibold">Priority Distribution</h3>
        </div>
        <div className="space-y-3">
          {Object.entries(priorityDistribution).map(([priority, count]) => (
            <div key={priority}>
              <div className="flex justify-between text-sm mb-1">
                <span className="capitalize">{priority}</span>
                <span>{count} tasks</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    priority === 'high'
                      ? 'bg-red-500'
                      : priority === 'medium'
                      ? 'bg-yellow-500'
                      : 'bg-blue-500'
                  }`}
                  style={{ width: `${(count / tasks.length) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="text-indigo-600" size={24} />
          <h3 className="text-lg font-semibold">Status Overview</h3>
        </div>
        <div className="space-y-3">
          {Object.entries(statusDistribution).map(([status, count]) => (
            <div key={status}>
              <div className="flex justify-between text-sm mb-1">
                <span className="capitalize">{status.replace('-', ' ')}</span>
                <span>{count} tasks</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    status === 'completed'
                      ? 'bg-green-500'
                      : status === 'in-progress'
                      ? 'bg-purple-500'
                      : 'bg-gray-500'
                  }`}
                  style={{ width: `${(count / tasks.length) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}