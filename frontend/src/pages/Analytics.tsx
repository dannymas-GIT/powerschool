import React from 'react';
import { 
  LineChart, 
  BarChart, 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  Users,
  Calendar,
  Award,
  BookOpen,
  Download,
  Filter,
  ChevronDown
} from 'lucide-react';

// Mock data for district-wide trends
const districtTrends = [
  { month: 'Jan', attendance: 94.2, enrollment: 15100, performance: 83.5 },
  { month: 'Feb', attendance: 94.0, enrollment: 15120, performance: 84.1 },
  { month: 'Mar', attendance: 93.8, enrollment: 15150, performance: 84.5 },
  { month: 'Apr', attendance: 93.5, enrollment: 15180, performance: 85.0 },
  { month: 'May', attendance: 93.0, enrollment: 15200, performance: 85.5 },
  { month: 'Jun', attendance: 92.5, enrollment: 15220, performance: 86.0 },
  { month: 'Jul', attendance: 0, enrollment: 15250, performance: 0 },
  { month: 'Aug', attendance: 95.0, enrollment: 15350, performance: 82.0 },
  { month: 'Sep', attendance: 95.2, enrollment: 15400, performance: 82.5 },
  { month: 'Oct', attendance: 94.8, enrollment: 15380, performance: 83.0 },
  { month: 'Nov', attendance: 94.5, enrollment: 15350, performance: 83.2 },
  { month: 'Dec', attendance: 94.3, enrollment: 15320, performance: 83.4 },
];

// Demographics data
const demographicsData = [
  { group: 'Caucasian', percentage: 45 },
  { group: 'Hispanic', percentage: 25 },
  { group: 'African American', percentage: 15 },
  { group: 'Asian', percentage: 10 },
  { group: 'Other', percentage: 5 },
];

// Program participation
const programParticipation = [
  { program: 'Special Education', count: 2150, percentage: 14 },
  { program: 'Gifted & Talented', count: 1840, percentage: 12 },
  { program: 'English Language Learners', count: 1230, percentage: 8 },
  { program: 'Free/Reduced Lunch', count: 5450, percentage: 35.5 },
  { program: 'After School Programs', count: 3200, percentage: 21 },
];

// Key metrics
const keyMetrics = [
  { 
    name: 'Graduation Rate', 
    value: '92.4%', 
    change: '+1.5%', 
    changeType: 'increase', 
    icon: Award 
  },
  { 
    name: 'College Acceptance', 
    value: '78.3%', 
    change: '+2.7%', 
    changeType: 'increase', 
    icon: TrendingUp 
  },
  { 
    name: 'Avg. Daily Attendance', 
    value: '94.2%', 
    change: '-0.3%', 
    changeType: 'decrease', 
    icon: Calendar 
  },
  { 
    name: 'Student-Teacher Ratio', 
    value: '18:1', 
    change: '-1', 
    changeType: 'increase', 
    icon: Users 
  },
];

export const Analytics = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            District Analytics
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Comprehensive data insights across all schools and programs.
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
          <button className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric) => {
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
                      ? metric.name === 'Student-Teacher Ratio' 
                        ? 'text-danger-500' 
                        : 'text-success-500'
                      : metric.name === 'Student-Teacher Ratio'
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

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trends Chart - Takes up 2/3 of the row */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-soft p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              District Trends
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600">Attendance</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-info-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600">Performance</span>
              </div>
            </div>
          </div>
          <div className="h-80">
            <div className="h-64 relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-2">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              
              {/* Chart grid */}
              <div className="ml-8 h-full flex flex-col justify-between">
                <div className="border-b border-gray-200 h-[20%]"></div>
                <div className="border-b border-gray-200 h-[20%]"></div>
                <div className="border-b border-gray-200 h-[20%]"></div>
                <div className="border-b border-gray-200 h-[20%]"></div>
                <div className="border-b border-gray-200 h-[20%]"></div>
              </div>
              
              {/* Actual chart */}
              <div className="absolute top-0 left-8 right-0 bottom-0 flex items-end">
                <div className="w-full h-full flex">
                  {districtTrends.map((data, index) => (
                    <div 
                      key={data.month} 
                      className="flex-1 flex flex-col justify-end relative h-full"
                    >
                      {/* Attendance line point */}
                      <div 
                        className="absolute w-2 h-2 bg-primary-500 rounded-full"
                        style={{ 
                          bottom: `${data.attendance}%`,
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                      ></div>
                      
                      {/* Performance line point */}
                      <div 
                        className="absolute w-2 h-2 bg-info-500 rounded-full"
                        style={{ 
                          bottom: `${data.performance}%`,
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                      ></div>
                      
                      {/* Line to previous point - Attendance */}
                      {index > 0 && data.attendance > 0 && districtTrends[index-1].attendance > 0 && (
                        <div 
                          className="absolute bg-primary-500 h-[1px]"
                          style={{
                            bottom: `${(data.attendance + districtTrends[index-1].attendance) / 2}%`,
                            left: '-50%',
                            width: '100%',
                            transform: `rotate(${Math.atan2(
                              data.attendance - districtTrends[index-1].attendance,
                              5
                            ) * (180 / Math.PI)}deg)`,
                            transformOrigin: 'left bottom'
                          }}
                        ></div>
                      )}
                      
                      {/* Line to previous point - Performance */}
                      {index > 0 && data.performance > 0 && districtTrends[index-1].performance > 0 && (
                        <div 
                          className="absolute bg-info-500 h-[1px]"
                          style={{
                            bottom: `${(data.performance + districtTrends[index-1].performance) / 2}%`,
                            left: '-50%',
                            width: '100%',
                            transform: `rotate(${Math.atan2(
                              data.performance - districtTrends[index-1].performance,
                              5
                            ) * (180 / Math.PI)}deg)`,
                            transformOrigin: 'left bottom'
                          }}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* X-axis labels */}
            <div className="ml-8 flex justify-between pt-2 text-xs text-gray-600">
              {districtTrends.map((data) => (
                <div key={data.month} className="text-center">
                  {data.month}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demographics Chart - Takes up 1/3 of the row */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Student Demographics
          </h2>
          <div className="h-64 flex flex-col items-center justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden">
              {demographicsData.map((item, index, arr) => {
                // Calculate starting angle based on previous segments
                const startAngle = arr.slice(0, index).reduce((sum, curr) => sum + curr.percentage, 0);
                const endAngle = startAngle + item.percentage;
                
                // Convert percentage to conic gradient
                return (
                  <div 
                    key={item.group}
                    className="absolute inset-0"
                    style={{
                      background: `conic-gradient(transparent ${startAngle}%, ${getColorForIndex(index)} ${startAngle}%, ${getColorForIndex(index)} ${endAngle}%, transparent ${endAngle}%)`
                    }}
                  ></div>
                );
              })}
              <div className="absolute inset-3 bg-white rounded-full"></div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
              {demographicsData.map((item, index) => (
                <div key={item.group} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: getColorForIndex(index) }}
                  ></div>
                  <span className="text-xs">
                    <span className="font-medium">{item.group}</span>
                    <span className="text-gray-500 ml-1">{item.percentage}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Program Participation */}
      <div className="bg-white rounded-lg shadow-soft p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Program Participation
        </h2>
        <div className="space-y-4">
          {programParticipation.map((program) => (
            <div key={program.program}>
              <div className="flex items-center justify-between mb-1">
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    {program.program}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({program.count} students)
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  {program.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-500 h-2 rounded-full"
                  style={{ width: `${program.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to get a color based on index
function getColorForIndex(index: number): string {
  const colors = [
    '#3b82f6', // primary-500
    '#0ea5e9', // info-500
    '#10b981', // success-500
    '#f59e0b', // warning-500
    '#ef4444', // danger-500
  ];
  return colors[index % colors.length];
} 