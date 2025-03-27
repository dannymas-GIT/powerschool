import React from 'react';
import { Search, Filter, Download } from 'lucide-react';

const students = [
  {
    id: 1,
    name: 'John Smith',
    grade: '10th',
    class: '10-A',
    attendance: '95%',
    performance: 'A',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Emma Johnson',
    grade: '9th',
    class: '9-B',
    attendance: '92%',
    performance: 'B+',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Michael Brown',
    grade: '11th',
    class: '11-A',
    attendance: '88%',
    performance: 'B',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Sarah Davis',
    grade: '10th',
    class: '10-B',
    attendance: '97%',
    performance: 'A+',
    status: 'Active',
  },
  {
    id: 5,
    name: 'James Wilson',
    grade: '9th',
    class: '9-A',
    attendance: '85%',
    performance: 'C+',
    status: 'Warning',
  },
];

export const Students = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-secondary-900 dark:text-white">
            Students
          </h1>
          <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-400">
            A list of all students including their name, grade, class, attendance, and performance.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search students..."
                  className="block w-full rounded-md border-secondary-300 dark:border-secondary-700 pr-10 focus:border-primary-500 focus:ring-primary-500 dark:bg-secondary-800 dark:text-white sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-4 w-4 text-secondary-400" />
                </div>
              </div>
              <button className="inline-flex items-center px-3 py-2 border border-secondary-300 dark:border-secondary-700 shadow-sm text-sm font-medium rounded-md text-secondary-700 dark:text-secondary-200 bg-white dark:bg-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
            </div>

            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              <table className="min-w-full divide-y divide-secondary-300 dark:divide-secondary-700">
                <thead className="bg-secondary-50 dark:bg-secondary-800">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-secondary-900 dark:text-white sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-secondary-900 dark:text-white">
                      Grade
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-secondary-900 dark:text-white">
                      Class
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-secondary-900 dark:text-white">
                      Attendance
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-secondary-900 dark:text-white">
                      Performance
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-secondary-900 dark:text-white">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary-200 dark:divide-secondary-700 bg-white dark:bg-secondary-900">
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-secondary-900 dark:text-white sm:pl-6">
                        {student.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-secondary-500 dark:text-secondary-400">
                        {student.grade}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-secondary-500 dark:text-secondary-400">
                        {student.class}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-secondary-500 dark:text-secondary-400">
                        {student.attendance}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-secondary-500 dark:text-secondary-400">
                        {student.performance}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            student.status === 'Active'
                              ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                          }`}
                        >
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 