import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  BarChart, 
  TrendingUp, 
  Award, 
  FileText,
  Search,
  ChevronDown,
  Calendar
} from 'lucide-react';

// Mock data for academic performance
const assessmentMetrics = [
  { 
    name: 'District Average', 
    value: '84%', 
    change: '+2.3%', 
    changeType: 'increase',
    icon: Award
  },
  { 
    name: 'Proficient/Advanced', 
    value: '72%', 
    change: '+5.1%', 
    changeType: 'increase',
    icon: TrendingUp
  },
  { 
    name: 'Standardized Tests', 
    value: '88%', 
    change: '+1.7%', 
    changeType: 'increase',
    icon: FileText
  },
  { 
    name: 'Growth Rate', 
    value: '65%', 
    change: '-2.1%', 
    changeType: 'decrease',
    icon: BarChart
  },
];

// Mock data for subject performance
const subjectPerformance = [
  { subject: 'Mathematics', proficient: 76, basic: 18, below: 6 },
  { subject: 'English', proficient: 82, basic: 12, below: 6 },
  { subject: 'Science', proficient: 79, basic: 15, below: 6 },
  { subject: 'Social Studies', proficient: 84, basic: 10, below: 6 },
  { subject: 'Foreign Language', proficient: 73, basic: 20, below: 7 },
];

// Mock data for grade level performance
const gradePerformance = [
  { 
    grade: 'Elementary',
    scores: [
      { year: '2019', score: 81 },
      { year: '2020', score: 79 },
      { year: '2021', score: 82 },
      { year: '2022', score: 85 },
      { year: '2023', score: 87 },
    ] 
  },
  { 
    grade: 'Middle School',
    scores: [
      { year: '2019', score: 78 },
      { year: '2020', score: 76 },
      { year: '2021', score: 79 },
      { year: '2022', score: 81 },
      { year: '2023', score: 84 },
    ] 
  },
  { 
    grade: 'High School',
    scores: [
      { year: '2019', score: 76 },
      { year: '2020', score: 75 },
      { year: '2021', score: 77 },
      { year: '2022', score: 80 },
      { year: '2023', score: 83 },
    ] 
  },
];

// Assessment tools
const assessmentTools = [
  {
    name: 'Standards Browser',
    description: 'Browse and review academic standards',
    icon: BookOpen,
    color: 'text-primary-500'
  },
  {
    name: 'Assessment Builder',
    description: 'Create and manage assessments',
    icon: FileText,
    color: 'text-success-500'
  },
  {
    name: 'Data Analysis',
    description: 'Analyze assessment results',
    icon: BarChart,
    color: 'text-info-500'
  },
  {
    name: 'Progress Reports',
    description: 'Generate student progress reports',
    icon: TrendingUp,
    color: 'text-warning-500'
  },
];

// Upcoming assessments
const upcomingAssessments = [
  { 
    id: 1, 
    title: 'District Math Benchmark', 
    date: 'Nov 20-22, 2023', 
    grades: '3-8',
    status: 'Scheduled'
  },
  { 
    id: 2, 
    title: 'Reading Comprehension Assessment', 
    date: 'Dec 5-6, 2023', 
    grades: 'K-5',
    status: 'Preparing'
  },
  { 
    id: 3, 
    title: 'High School Science Finals', 
    date: 'Dec 12-16, 2023', 
    grades: '9-12',
    status: 'Preparing'
  },
  { 
    id: 4, 
    title: 'Mid-Year Skills Assessment', 
    date: 'Jan 8-12, 2024', 
    grades: 'All',
    status: 'Planning'
  },
];

export const Assessment = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Assessment Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Monitor district assessment data and student performance.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
              <option>2023-2024</option>
              <option>2022-2023</option>
              <option>2021-2022</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700">
            Generate Reports
          </button>
        </div>
      </div>

      {/* Assessment Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {assessmentMetrics.map((metric) => {
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
        {/* Subject Performance */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Subject Performance
          </h2>
          <div className="space-y-4">
            {subjectPerformance.map((subject) => (
              <div key={subject.subject}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {subject.subject}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">
                      <span className="font-medium text-success-500">{subject.proficient}%</span> Proficient
                    </span>
                    <span className="text-xs text-gray-500">
                      <span className="font-medium text-warning-500">{subject.basic}%</span> Basic
                    </span>
                    <span className="text-xs text-gray-500">
                      <span className="font-medium text-danger-500">{subject.below}%</span> Below
                    </span>
                  </div>
                </div>
                <div className="w-full flex h-5 rounded-md overflow-hidden">
                  <div 
                    className="bg-success-500" 
                    style={{ width: `${subject.proficient}%` }}
                  ></div>
                  <div 
                    className="bg-warning-500" 
                    style={{ width: `${subject.basic}%` }}
                  ></div>
                  <div 
                    className="bg-danger-500" 
                    style={{ width: `${subject.below}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grade Performance Trends */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Performance Trends by School Level
          </h2>
          <div className="h-64">
            <div className="h-full flex flex-col justify-between">
              <div className="h-52 flex items-end space-x-2">
                {['2019', '2020', '2021', '2022', '2023'].map((year) => (
                  <div key={year} className="flex-1 flex items-end space-x-1 justify-center">
                    {gradePerformance.map((grade) => {
                      const yearData = grade.scores.find(s => s.year === year);
                      const score = yearData ? yearData.score : 0;
                      let bgColor = 'bg-primary-500';
                      
                      if (grade.grade === 'Middle School') {
                        bgColor = 'bg-info-500';
                      } else if (grade.grade === 'High School') {
                        bgColor = 'bg-warning-500';
                      }
                      
                      return (
                        <div 
                          key={grade.grade} 
                          className={`w-6 ${bgColor} rounded-t`}
                          style={{ height: `${score}%` }}
                          title={`${grade.grade} (${year}): ${score}%`}
                        ></div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-600 pt-2 border-t">
                {['2019', '2020', '2021', '2022', '2023'].map((year) => (
                  <div key={year} className="text-center">{year}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-2 flex justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">Elementary</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-info-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">Middle School</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-warning-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">High School</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assessment Tools */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Assessment Tools
          </h2>
          <div className="space-y-3">
            {assessmentTools.map((tool) => (
              <button
                key={tool.name}
                className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-150"
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

        {/* Upcoming Assessments */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-soft p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Upcoming Assessments
            </h2>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search assessments..."
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm mb-4"
            />
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assessment
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grades
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {upcomingAssessments.map((assessment) => (
                  <tr key={assessment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {assessment.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assessment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assessment.grades}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          assessment.status === 'Scheduled' 
                            ? 'bg-green-100 text-green-800' 
                            : assessment.status === 'Preparing'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {assessment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <button className="text-sm font-medium text-primary-600">
              View All Assessments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 