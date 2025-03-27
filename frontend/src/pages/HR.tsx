import React from 'react';
import {
  Users,
  Briefcase,
  Calendar,
  Search,
  Filter,
  Download,
  ChevronDown,
  FileText,
  Award,
  Clipboard,
  Clock
} from 'lucide-react';

// Mock data for HR metrics
const hrMetrics = [
  {
    name: 'Total Staff',
    value: '1,245',
    change: '+3.2%',
    changeType: 'increase',
    icon: Users
  },
  {
    name: 'Teacher Retention',
    value: '92%',
    change: '+2.5%',
    changeType: 'increase',
    icon: Briefcase
  },
  {
    name: 'Open Positions',
    value: '18',
    change: '-5',
    changeType: 'decrease',
    icon: FileText
  },
  {
    name: 'Certification Compliance',
    value: '98.7%',
    change: '+0.5%',
    changeType: 'increase',
    icon: Award
  }
];

// Mock data for staff by role
const staffByRole = [
  { role: 'Teachers', count: 687, percentage: 55.2 },
  { role: 'Administration', count: 78, percentage: 6.3 },
  { role: 'Support Staff', count: 215, percentage: 17.3 },
  { role: 'Specialists', count: 142, percentage: 11.4 },
  { role: 'Maintenance', count: 67, percentage: 5.4 },
  { role: 'Other', count: 56, percentage: 4.5 }
];

// Mock data for staff by school
const staffBySchool = [
  { 
    name: 'Elementary Schools',
    count: 498,
    breakdown: [
      { name: 'Washington Elementary', count: 78 },
      { name: 'Lincoln Elementary', count: 82 },
      { name: 'Roosevelt Elementary', count: 85 },
      { name: 'Jefferson Elementary', count: 75 },
      { name: 'Franklin Elementary', count: 88 },
      { name: 'Adams Elementary', count: 90 }
    ]
  },
  { 
    name: 'Middle Schools',
    count: 302,
    breakdown: [
      { name: 'Central Middle School', count: 102 },
      { name: 'Westlake Middle School', count: 98 },
      { name: 'Eastside Middle School', count: 102 }
    ]
  },
  { 
    name: 'High Schools',
    count: 315,
    breakdown: [
      { name: 'Washington High School', count: 165 },
      { name: 'Jefferson High School', count: 150 }
    ]
  },
  { 
    name: 'District Office',
    count: 130,
    breakdown: [
      { name: 'Administration', count: 45 },
      { name: 'Curriculum', count: 25 },
      { name: 'Technology', count: 20 },
      { name: 'Facilities', count: 15 },
      { name: 'Finance', count: 15 },
      { name: 'Other', count: 10 }
    ]
  }
];

// HR tools
const hrTools = [
  {
    name: 'Staff Directory',
    description: 'Access contact information for all staff',
    icon: Users,
    color: 'text-primary-500'
  },
  {
    name: 'Recruitment Portal',
    description: 'Manage job postings and applications',
    icon: Briefcase,
    color: 'text-success-500'
  },
  {
    name: 'Leave Management',
    description: 'Track and approve leave requests',
    icon: Calendar,
    color: 'text-info-500'
  },
  {
    name: 'Certification Tracker',
    description: 'Monitor staff certifications and renewals',
    icon: Award,
    color: 'text-warning-500'
  },
  {
    name: 'Professional Development',
    description: 'Manage training and development programs',
    icon: Clipboard,
    color: 'text-danger-500'
  },
  {
    name: 'Time & Attendance',
    description: 'Track employee time and attendance',
    icon: Clock,
    color: 'text-secondary-500'
  }
];

// Upcoming hire needs
const upcomingHires = [
  { 
    id: 1, 
    position: 'High School Math Teacher', 
    location: 'Washington High School', 
    openDate: 'Oct 15, 2023',
    status: 'Urgent',
    applicants: 5
  },
  { 
    id: 2, 
    position: 'Elementary School Counselor', 
    location: 'Franklin Elementary', 
    openDate: 'Oct 22, 2023',
    status: 'Active',
    applicants: 12
  },
  { 
    id: 3, 
    position: 'Special Education Teacher', 
    location: 'Westlake Middle School', 
    openDate: 'Oct 30, 2023',
    status: 'Active',
    applicants: 8
  },
  { 
    id: 4, 
    position: 'IT Support Specialist', 
    location: 'District Office', 
    openDate: 'Nov 5, 2023',
    status: 'New',
    applicants: 15
  }
];

export const HR = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Human Resources
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage district staff, recruitment, and personnel operations.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export Staff Data
          </button>
          <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700">
            New Position
          </button>
        </div>
      </div>

      {/* HR Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hrMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.name}
              className="bg-white rounded-lg shadow-soft p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {metric.name}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">
                    {metric.value}
                  </p>
                </div>
                <div className="bg-primary-50 rounded-full p-3">
                  <Icon className="h-6 w-6 text-primary-500" />
                </div>
              </div>
              <div className="mt-4">
                <span
                  className={`text-sm font-medium ${
                    metric.changeType === 'increase'
                      ? 'text-success-500'
                      : metric.changeType === 'decrease' && metric.name === 'Open Positions'
                      ? 'text-success-500'
                      : 'text-danger-500'
                  }`}
                >
                  {metric.change}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {' '}from last year
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Staff by Role */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Staff by Role
          </h2>
          <div className="space-y-4">
            {staffByRole.map((role) => (
              <div key={role.role}>
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      {role.role}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      ({role.count})
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {role.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full"
                    style={{ width: `${role.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staff by Location */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Staff by Location
          </h2>
          <div className="space-y-6">
            {staffBySchool.map((school) => (
              <div key={school.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    {school.name}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {school.count} staff
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                  {school.breakdown.map((item) => (
                    <div key={item.name} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="font-medium">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* HR Tools */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            HR Tools & Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hrTools.map((tool) => (
              <button
                key={tool.name}
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-150"
              >
                <div className={`${tool.color} p-2 bg-white rounded-lg shadow-soft`}>
                  <tool.icon className="h-5 w-5" />
                </div>
                <div className="ml-3 text-left">
                  <h3 className="text-sm font-medium text-gray-900">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {tool.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Upcoming Hire Needs */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Current Openings
            </h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search positions..."
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              <button className="border border-gray-300 bg-white rounded-md p-2">
                <Filter className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Open Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicants
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {upcomingHires.map((position) => (
                  <tr key={position.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {position.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {position.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {position.openDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {position.applicants}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          position.status === 'Urgent' 
                            ? 'bg-red-100 text-red-800' 
                            : position.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {position.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <button className="text-sm font-medium text-primary-600">
              View All Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 