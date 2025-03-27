import React from 'react';
import {
  Users,
  GraduationCap,
  Calendar,
  BookOpen,
  TrendingUp,
  Clock,
  Bell,
  School,
  DollarSign,
  UserCheck,
  Award,
  Briefcase,
  FileText,
} from 'lucide-react';

// Mock data for district analytics
const districtStats = [
  {
    name: 'Total Students',
    value: '15,234',
    change: '+3.2%',
    changeType: 'increase',
    icon: Users,
  },
  {
    name: 'Total Staff',
    value: '1,245',
    change: '+1.5%',
    changeType: 'increase',
    icon: Briefcase,
  },
  {
    name: 'Schools',
    value: '32',
    change: '0',
    changeType: 'neutral',
    icon: School,
  },
  {
    name: 'Budget Utilization',
    value: '92.5%',
    change: '+4.3%',
    changeType: 'increase',
    icon: DollarSign,
  },
];

const performanceMetrics = [
  {
    name: 'Graduation Rate',
    value: '89%',
    target: '90%',
    progress: 89,
  },
  {
    name: 'Attendance Rate',
    value: '94.2%',
    target: '95%',
    progress: 94.2,
  },
  {
    name: 'College Acceptance',
    value: '76%',
    target: '80%',
    progress: 76,
  },
  {
    name: 'Teacher Retention',
    value: '85%',
    target: '88%',
    progress: 85,
  },
];

const recentActivity = [
  {
    id: 1,
    user: 'Dr. Sarah Johnson',
    role: 'District Superintendent',
    action: 'Approved new curriculum for 2024-25',
    timestamp: '10 minutes ago',
  },
  {
    id: 2,
    user: 'Mark Wilson',
    role: 'HR Director',
    action: 'Updated district staff handbook',
    timestamp: '25 minutes ago',
  },
  {
    id: 3,
    user: 'Emily Brown',
    role: 'Curriculum Director',
    action: 'Submitted Q3 assessment report',
    timestamp: '1 hour ago',
  },
  {
    id: 4,
    user: 'David Clark',
    role: 'Finance Director',
    action: 'Approved budget allocation for Q4',
    timestamp: '2 hours ago',
  },
];

const upcomingTasks = [
  {
    id: 1,
    title: 'District Board Meeting',
    date: 'Tomorrow, 9:00 AM',
    type: 'Meeting',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Budget Review',
    date: 'This Friday',
    type: 'Finance',
    priority: 'High',
  },
  {
    id: 3,
    title: 'Staff Development Day',
    date: 'Next Monday',
    type: 'Training',
    priority: 'Medium',
  },
  {
    id: 4,
    title: 'Curriculum Committee Review',
    date: 'Next Wednesday',
    type: 'Academic',
    priority: 'Medium',
  },
];

const quickActions = [
  {
    name: 'Staff Directory',
    description: 'Access contact information for all district staff',
    icon: UserCheck,
    color: 'text-primary-500',
  },
  {
    name: 'Document Center',
    description: 'Access and manage district documents',
    icon: FileText,
    color: 'text-info-500',
  },
  {
    name: 'Reports Dashboard',
    description: 'View and generate district reports',
    icon: TrendingUp,
    color: 'text-success-500',
  },
  {
    name: 'Academic Calendar',
    description: 'View and manage district calendar',
    icon: Calendar,
    color: 'text-warning-500',
  },
];

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          District Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Welcome back! Here's what's happening across your district.
        </p>
      </div>

      {/* District Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {districtStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white rounded-lg shadow-soft p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className="bg-primary-50 rounded-full p-3">
                  <Icon className="h-6 w-6 text-primary-500" />
                </div>
              </div>
              <div className="mt-4">
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === 'increase'
                      ? 'text-success-500'
                      : stat.changeType === 'decrease'
                      ? 'text-danger-500'
                      : 'text-gray-500'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {' '}from last month
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-lg shadow-soft p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Performance Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <div className="flex justify-between items-baseline">
                <p className="text-sm font-medium text-gray-600">
                  {metric.name}
                </p>
                <p className="text-sm text-gray-900">
                  {metric.value} <span className="text-gray-500">/ {metric.target}</span>
                </p>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-primary-100">
                  <div
                    style={{ width: `${metric.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-soft">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h2>
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.user}
                    </p>
                    <p className="text-xs text-gray-500">{activity.role}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-4">
            {quickActions.map((action) => (
              <button
                key={action.name}
                className="w-full flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-150"
              >
                <div className={`${action.color} p-2 bg-white rounded-lg shadow-soft`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-sm font-medium text-gray-900">
                    {action.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {action.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="bg-white rounded-lg shadow-soft p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Tasks
          </h2>
          <Bell className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">
                  {task.title}
                </h3>
                <p className="text-sm text-gray-500">{task.date}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {task.type}
                </span>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    task.priority === 'High'
                      ? 'bg-danger-50 text-danger-700'
                      : 'bg-warning-50 text-warning-700'
                  }`}
                >
                  {task.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 