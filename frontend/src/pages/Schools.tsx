import React, { useState } from 'react';
import { 
  School, 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  UserCheck, 
  BookOpen, 
  BarChart, 
  Calendar, 
  Clock,
  Filter,
  Plus,
  ChevronDown,
  Download
} from 'lucide-react';

// Mock data for school levels
const schoolLevels = [
  { id: 'elementary', name: 'Elementary', count: 12, color: 'bg-primary-500' },
  { id: 'middle', name: 'Middle', count: 5, color: 'bg-info-500' },
  { id: 'high', name: 'High', count: 4, color: 'bg-warning-500' },
  { id: 'alternative', name: 'Alternative', count: 2, color: 'bg-success-500' },
  { id: 'special', name: 'Special Education', count: 1, color: 'bg-danger-500' },
];

// Mock data for schools
const schoolsData = [
  {
    id: 1,
    name: 'Washington Elementary School',
    level: 'elementary',
    address: '2120 Pine Street, Springfield, CA 92345',
    phone: '(555) 123-4567',
    email: 'info@washingtonelementary.edu',
    principal: 'Dr. Sarah Johnson',
    students: 580,
    teachers: 32,
    performance: { grade: 'A', score: 92 },
    attendance: '95.2%',
    established: 1985,
    image: 'https://placehold.co/200x150?text=Washington'
  },
  {
    id: 2,
    name: 'Lincoln Elementary School',
    level: 'elementary',
    address: '345 Oak Avenue, Springfield, CA 92345',
    phone: '(555) 123-4568',
    email: 'info@lincolnelementary.edu',
    principal: 'Michael Davis',
    students: 620,
    teachers: 35,
    performance: { grade: 'A-', score: 89 },
    attendance: '94.8%',
    established: 1978,
    image: 'https://placehold.co/200x150?text=Lincoln'
  },
  {
    id: 3,
    name: 'Central Middle School',
    level: 'middle',
    address: '789 Maple Road, Springfield, CA 92345',
    phone: '(555) 123-4569',
    email: 'info@centralmiddle.edu',
    principal: 'Dr. Robert Chen',
    students: 840,
    teachers: 45,
    performance: { grade: 'B+', score: 88 },
    attendance: '93.5%',
    established: 1972,
    image: 'https://placehold.co/200x150?text=Central'
  },
  {
    id: 4,
    name: 'Washington High School',
    level: 'high',
    address: '1250 University Blvd, Springfield, CA 92345',
    phone: '(555) 123-4570',
    email: 'info@washingtonhigh.edu',
    principal: 'Jennifer Lopez',
    students: 1520,
    teachers: 82,
    performance: { grade: 'A', score: 91 },
    attendance: '92.1%',
    established: 1965,
    image: 'https://placehold.co/200x150?text=WHS'
  },
  {
    id: 5,
    name: 'Springfield Alternative Academy',
    level: 'alternative',
    address: '567 Elm Street, Springfield, CA 92345',
    phone: '(555) 123-4571',
    email: 'info@springfieldalternative.edu',
    principal: 'Thomas Wilson',
    students: 220,
    teachers: 18,
    performance: { grade: 'B', score: 85 },
    attendance: '89.7%',
    established: 1998,
    image: 'https://placehold.co/200x150?text=SAA'
  },
  {
    id: 6,
    name: 'Jefferson Elementary School',
    level: 'elementary',
    address: '432 Birch Lane, Springfield, CA 92345',
    phone: '(555) 123-4572',
    email: 'info@jeffersonelementary.edu',
    principal: 'Emily Brown',
    students: 540,
    teachers: 30,
    performance: { grade: 'B+', score: 87 },
    attendance: '94.3%',
    established: 1990,
    image: 'https://placehold.co/200x150?text=Jefferson'
  },
  {
    id: 7,
    name: 'Westlake Middle School',
    level: 'middle',
    address: '890 Cedar Drive, Springfield, CA 92345',
    phone: '(555) 123-4573',
    email: 'info@westlakemiddle.edu',
    principal: 'David Garcia',
    students: 780,
    teachers: 42,
    performance: { grade: 'B+', score: 87 },
    attendance: '92.8%',
    established: 1975,
    image: 'https://placehold.co/200x150?text=Westlake'
  },
  {
    id: 8,
    name: 'Jefferson High School',
    level: 'high',
    address: '1500 College Street, Springfield, CA 92345',
    phone: '(555) 123-4574',
    email: 'info@jeffersonhigh.edu',
    principal: 'Dr. Patricia Lee',
    students: 1450,
    teachers: 78,
    performance: { grade: 'A-', score: 90 },
    attendance: '91.5%',
    established: 1968,
    image: 'https://placehold.co/200x150?text=JHS'
  },
];

// School performance data
const districtPerformanceData = {
  categories: ['Math', 'Reading', 'Science', 'History', 'Arts'],
  schools: [
    {
      name: 'Elementary Schools',
      data: [86, 89, 84, 82, 90]
    },
    {
      name: 'Middle Schools',
      data: [82, 85, 80, 78, 86]
    },
    {
      name: 'High Schools',
      data: [84, 83, 88, 81, 85]
    }
  ]
};

// School statistics
const schoolStatistics = {
  totalStudents: '15,650',
  averageClassSize: '24',
  studentTeacherRatio: '18:1',
  graduationRate: '92%',
  collegeEnrollment: '78%',
  totalSchools: '24',
};

export const Schools = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Filter schools based on selected level and search query
  const filteredSchools = schoolsData.filter(school => {
    const matchesLevel = selectedLevel ? school.level === selectedLevel : true;
    const matchesSearch = school.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         school.principal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const handleLevelClick = (levelId: string) => {
    setSelectedLevel(selectedLevel === levelId ? null : levelId);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Schools
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage district schools, facilities, and performance data.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700 flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add School
          </button>
        </div>
      </div>

      {/* School Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500">Total Students</span>
            <span className="text-2xl font-bold text-gray-900">{schoolStatistics.totalStudents}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500">Total Schools</span>
            <span className="text-2xl font-bold text-gray-900">{schoolStatistics.totalSchools}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500">Avg. Class Size</span>
            <span className="text-2xl font-bold text-gray-900">{schoolStatistics.averageClassSize}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500">Student-Teacher</span>
            <span className="text-2xl font-bold text-gray-900">{schoolStatistics.studentTeacherRatio}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500">Graduation Rate</span>
            <span className="text-2xl font-bold text-gray-900">{schoolStatistics.graduationRate}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500">College-Bound</span>
            <span className="text-2xl font-bold text-gray-900">{schoolStatistics.collegeEnrollment}</span>
          </div>
        </div>
      </div>

      {/* School Levels */}
      <div className="flex flex-wrap gap-3">
        {schoolLevels.map((level) => (
          <button
            key={level.id}
            onClick={() => handleLevelClick(level.id)}
            className={`flex items-center rounded-full px-4 py-2 text-sm font-medium ${
              selectedLevel === level.id
                ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${level.color} mr-2`}></div>
            {level.name}
            <span className="ml-2 text-xs text-gray-500">{level.count}</span>
          </button>
        ))}
      </div>

      {/* Search and View Mode */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search schools..."
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <button 
            className={`border p-2 rounded-md ${viewMode === 'grid' ? 'bg-primary-50 border-primary-500' : 'border-gray-300 bg-white'}`}
            onClick={() => setViewMode('grid')}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1" className={viewMode === 'grid' ? 'fill-primary-500' : 'fill-gray-500'} />
              <rect x="14" y="3" width="7" height="7" rx="1" className={viewMode === 'grid' ? 'fill-primary-500' : 'fill-gray-500'} />
              <rect x="3" y="14" width="7" height="7" rx="1" className={viewMode === 'grid' ? 'fill-primary-500' : 'fill-gray-500'} />
              <rect x="14" y="14" width="7" height="7" rx="1" className={viewMode === 'grid' ? 'fill-primary-500' : 'fill-gray-500'} />
            </svg>
          </button>
          <button 
            className={`border p-2 rounded-md ${viewMode === 'table' ? 'bg-primary-50 border-primary-500' : 'border-gray-300 bg-white'}`}
            onClick={() => setViewMode('table')}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="2" rx="1" className={viewMode === 'table' ? 'fill-primary-500' : 'fill-gray-500'} />
              <rect x="3" y="9" width="18" height="2" rx="1" className={viewMode === 'table' ? 'fill-primary-500' : 'fill-gray-500'} />
              <rect x="3" y="15" width="18" height="2" rx="1" className={viewMode === 'table' ? 'fill-primary-500' : 'fill-gray-500'} />
              <rect x="3" y="21" width="18" height="2" rx="1" className={viewMode === 'table' ? 'fill-primary-500' : 'fill-gray-500'} />
            </svg>
          </button>
          <button className="border border-gray-300 bg-white rounded-md p-2 flex items-center text-sm font-medium hover:bg-gray-50">
            <Filter className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Schools List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSchools.map((school) => {
            const levelObj = schoolLevels.find(l => l.id === school.level);
            
            return (
              <div key={school.id} className="bg-white rounded-lg shadow-soft overflow-hidden">
                <div 
                  className="h-40 bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${school.image})` }}
                ></div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900 truncate" title={school.name}>
                      {school.name}
                    </h3>
                    <div 
                      className={`w-3 h-3 rounded-full ${levelObj?.color}`} 
                      title={levelObj?.name}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-0.5 flex-shrink-0" />
                      <span className="truncate" title={school.address}>
                        {school.address}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-1" />
                      <span>{school.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-1" />
                      <span>{school.principal}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2 text-center">
                    <div>
                      <div className="text-xs text-gray-500">Students</div>
                      <div className="font-medium text-gray-900">{school.students.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Teachers</div>
                      <div className="font-medium text-gray-900">{school.teachers}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Grade</div>
                      <div className="font-medium text-gray-900">{school.performance.grade}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Attendance</div>
                      <div className="font-medium text-gray-900">{school.attendance}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="w-full text-center py-2 border border-primary-500 text-primary-600 rounded-md text-sm font-medium hover:bg-primary-50">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    School Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Level
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Principal
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teachers
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attendance
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSchools.map((school) => {
                  const levelObj = schoolLevels.find(l => l.id === school.level);
                  
                  return (
                    <tr key={school.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-md bg-gray-200" style={{ backgroundImage: `url(${school.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{school.name}</div>
                            <div className="text-xs text-gray-500 truncate max-w-xs">{school.address}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full ${levelObj?.color} mr-2`}></div>
                          <span className="text-sm text-gray-900">{levelObj?.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {school.principal}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {school.students.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {school.teachers}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          school.performance.grade.startsWith('A') 
                            ? 'bg-green-100 text-green-800' 
                            : school.performance.grade.startsWith('B')
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {school.performance.grade} ({school.performance.score})
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {school.attendance}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-primary-600 hover:text-primary-900">
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Performance Comparison */}
      <div className="bg-white rounded-lg shadow-soft p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Performance by Subject Area
        </h2>
        <div className="h-80">
          <div className="h-64 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-2">
              <span>100</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>
            
            {/* Chart grid */}
            <div className="ml-8 h-full flex flex-col justify-between">
              <div className="border-b border-gray-200 h-1/5"></div>
              <div className="border-b border-gray-200 h-1/5"></div>
              <div className="border-b border-gray-200 h-1/5"></div>
              <div className="border-b border-gray-200 h-1/5"></div>
              <div className="border-b border-gray-200 h-1/5"></div>
            </div>
            
            {/* Chart bars */}
            <div className="absolute top-0 left-8 right-0 bottom-0 flex items-end">
              <div className="w-full h-full flex justify-around items-end">
                {districtPerformanceData.categories.map((category, index) => (
                  <div key={category} className="flex-1 h-full flex flex-col justify-end items-center">
                    <div className="relative w-full flex justify-center items-end mb-2 space-x-1">
                      {districtPerformanceData.schools.map((school, schoolIdx) => {
                        const height = (school.data[index] / 100) * 100;
                        let bgColor = 'bg-primary-500';
                        
                        if (schoolIdx === 1) {
                          bgColor = 'bg-info-500';
                        } else if (schoolIdx === 2) {
                          bgColor = 'bg-warning-500';
                        }
                        
                        return (
                          <div 
                            key={school.name} 
                            className={`w-5 ${bgColor} rounded-t`}
                            style={{ height: `${height}%` }}
                            title={`${school.name} - ${category}: ${school.data[index]}%`}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* X-axis labels */}
          <div className="ml-8 flex justify-around pt-2 text-xs text-gray-600">
            {districtPerformanceData.categories.map((category) => (
              <div key={category} className="text-center flex-1">
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 flex justify-center space-x-6">
          {districtPerformanceData.schools.map((school, index) => {
            let bgColor = 'bg-primary-500';
            if (index === 1) {
              bgColor = 'bg-info-500';
            } else if (index === 2) {
              bgColor = 'bg-warning-500';
            }
            
            return (
              <div key={school.name} className="flex items-center">
                <div className={`w-3 h-3 ${bgColor} rounded-full mr-2`}></div>
                <span className="text-xs text-gray-600">{school.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 