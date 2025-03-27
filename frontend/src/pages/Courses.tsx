import React from 'react';
import { Search, Plus, Users, Clock, BookOpen } from 'lucide-react';

const courses = [
  {
    id: 1,
    name: 'Advanced Mathematics',
    teacher: 'Dr. Sarah Johnson',
    students: 28,
    schedule: 'Mon, Wed, Fri - 9:00 AM',
    progress: 65,
    status: 'In Progress',
  },
  {
    id: 2,
    name: 'Physics 101',
    teacher: 'Prof. Michael Chen',
    students: 24,
    schedule: 'Tue, Thu - 10:30 AM',
    progress: 45,
    status: 'In Progress',
  },
  {
    id: 3,
    name: 'World History',
    teacher: 'Mrs. Emily Brown',
    students: 32,
    schedule: 'Mon, Wed - 1:00 PM',
    progress: 80,
    status: 'In Progress',
  },
  {
    id: 4,
    name: 'English Literature',
    teacher: 'Mr. James Wilson',
    students: 26,
    schedule: 'Tue, Thu - 2:30 PM',
    progress: 55,
    status: 'In Progress',
  },
  {
    id: 5,
    name: 'Chemistry Lab',
    teacher: 'Dr. Robert Taylor',
    students: 20,
    schedule: 'Wed, Fri - 11:00 AM',
    progress: 70,
    status: 'In Progress',
  },
  {
    id: 6,
    name: 'Computer Science',
    teacher: 'Ms. Lisa Anderson',
    students: 22,
    schedule: 'Mon, Thu - 3:00 PM',
    progress: 60,
    status: 'In Progress',
  },
];

export const Courses = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-secondary-900 dark:text-white">
            Courses
          </h1>
          <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-400">
            Manage and monitor all active courses and their progress.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Course
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="relative flex-1 max-w-lg mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            className="block w-full rounded-md border-secondary-300 dark:border-secondary-700 pr-10 focus:border-primary-500 focus:ring-primary-500 dark:bg-secondary-800 dark:text-white sm:text-sm"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Search className="h-4 w-4 text-secondary-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-secondary-800 overflow-hidden rounded-lg shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-secondary-900 dark:text-white">
                    {course.name}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100">
                    {course.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-400">
                  {course.teacher}
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400">
                    <Users className="h-4 w-4 mr-2" />
                    {course.students} Students
                  </div>
                  <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400">
                    <Clock className="h-4 w-4 mr-2" />
                    {course.schedule}
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm text-secondary-600 dark:text-secondary-400 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary-50 dark:bg-secondary-900 px-6 py-4">
                <button className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 