import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Search, 
  Plus, 
  CalendarDays,
  Users,
  Briefcase,
  Music,
  Trophy,
  Edit,
  Trash,
  Filter,
  ChevronDown,
  Download
} from 'lucide-react';

// Mock data for program categories
const programCategories = [
  { id: 'academic', name: 'Academic', count: 18, icon: GraduationCap },
  { id: 'arts', name: 'Arts & Music', count: 12, icon: Music },
  { id: 'athletics', name: 'Athletics', count: 15, icon: Trophy },
  { id: 'career', name: 'Career & Technical', count: 10, icon: Briefcase },
  { id: 'enrichment', name: 'Enrichment', count: 8, icon: BookOpen },
  { id: 'support', name: 'Support Services', count: 7, icon: Users },
];

// Mock data for programs
const programsData = [
  {
    id: 1,
    name: 'Advanced Placement (AP)',
    category: 'academic',
    description: 'College-level courses for high school students to earn college credit.',
    participatingSchools: 4,
    enrollment: 1245,
    budget: '$450,000',
    coordinator: 'Dr. Jennifer Morris',
    status: 'Active'
  },
  {
    id: 2,
    name: 'STEM Innovation Lab',
    category: 'academic',
    description: 'Hands-on science, technology, engineering, and mathematics program.',
    participatingSchools: 8,
    enrollment: 1820,
    budget: '$650,000',
    coordinator: 'Dr. Robert Chen',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Visual Arts Program',
    category: 'arts',
    description: 'Comprehensive visual arts education including painting, sculpture, and digital arts.',
    participatingSchools: 10,
    enrollment: 980,
    budget: '$320,000',
    coordinator: 'Sarah Martinez',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Band & Orchestra',
    category: 'arts',
    description: 'Instrumental music education program for all grade levels.',
    participatingSchools: 12,
    enrollment: 1450,
    budget: '$580,000',
    coordinator: 'Michael Johnson',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Varsity Athletics',
    category: 'athletics',
    description: 'Competitive sports programs for high school students.',
    participatingSchools: 4,
    enrollment: 1100,
    budget: '$780,000',
    coordinator: 'Coach James Williams',
    status: 'Active'
  },
  {
    id: 6,
    name: 'Career Pathways',
    category: 'career',
    description: 'Career preparation and certification programs for various industries.',
    participatingSchools: 6,
    enrollment: 850,
    budget: '$420,000',
    coordinator: 'Lisa Thompson',
    status: 'Active'
  },
  {
    id: 7,
    name: 'After School Enrichment',
    category: 'enrichment',
    description: 'Extended day enrichment activities across various subjects and interests.',
    participatingSchools: 15,
    enrollment: 2200,
    budget: '$380,000',
    coordinator: 'David Garcia',
    status: 'Active'
  },
  {
    id: 8,
    name: 'Special Education Services',
    category: 'support',
    description: 'Comprehensive support services for students with special needs.',
    participatingSchools: 18,
    enrollment: 750,
    budget: '$1,250,000',
    coordinator: 'Dr. Patricia Lee',
    status: 'Active'
  },
  {
    id: 9,
    name: 'Summer Learning Academy',
    category: 'academic',
    description: 'Summer programs for academic enrichment and advancement.',
    participatingSchools: 12,
    enrollment: 1680,
    budget: '$520,000',
    coordinator: 'Thomas Wilson',
    status: 'Planned'
  },
];

// Program outcomes
const programOutcomes = [
  { 
    program: 'Advanced Placement (AP)', 
    metrics: [
      { name: 'Pass Rate', value: '85%', change: '+3%' },
      { name: 'Avg. Score', value: '3.8', change: '+0.2' },
      { name: 'College Credit Earned', value: '92%', change: '+5%' }
    ]
  },
  { 
    program: 'STEM Innovation Lab', 
    metrics: [
      { name: 'STEM Competition Winners', value: '24', change: '+8' },
      { name: 'Projects Completed', value: '278', change: '+52' },
      { name: 'STEM College Admissions', value: '68%', change: '+12%' }
    ]
  },
  { 
    program: 'Varsity Athletics', 
    metrics: [
      { name: 'Championships', value: '5', change: '+2' },
      { name: 'College Athletic Scholarships', value: '28', change: '+7' },
      { name: 'Academic Achievement Rate', value: '94%', change: '+3%' }
    ]
  },
];

export const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter programs based on selected category and search query
  const filteredPrograms = programsData.filter(program => {
    const matchesCategory = selectedCategory ? program.category === selectedCategory : true;
    const matchesSearch = program.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         program.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Programs
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage district educational and support programs.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700 flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Program
          </button>
        </div>
      </div>

      {/* Program Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {programCategories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                isSelected 
                  ? 'bg-primary-50 border-2 border-primary-500' 
                  : 'bg-white border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className={`p-3 rounded-full ${
                isSelected ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'
              }`}>
                <Icon className="h-6 w-6" />
              </div>
              <span className={`mt-2 text-sm font-medium ${
                isSelected ? 'text-primary-700' : 'text-gray-700'
              }`}>
                {category.name}
              </span>
              <span className="text-xs text-gray-500">{category.count} Programs</span>
            </button>
          );
        })}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search programs..."
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="border border-gray-300 bg-white rounded-md p-2 flex items-center text-sm font-medium hover:bg-gray-50">
            <Filter className="h-4 w-4 text-gray-500 mr-2" />
            Filter
            <ChevronDown className="h-4 w-4 text-gray-500 ml-1" />
          </button>
          <select className="border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Planned</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Programs Table */}
      <div className="bg-white rounded-lg shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Program Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Schools
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enrollment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPrograms.map((program) => {
                const categoryObj = programCategories.find(c => c.id === program.category);
                const CategoryIcon = categoryObj?.icon || BookOpen;
                
                return (
                  <tr key={program.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <CategoryIcon className="h-5 w-5 text-primary-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{program.name}</div>
                          <div className="text-xs text-gray-500 max-w-xs truncate">{program.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{categoryObj?.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {program.participatingSchools}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {program.enrollment.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {program.budget}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        program.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : program.status === 'Planned'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {program.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900 mr-3">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Trash className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Program Outcomes */}
      <div className="bg-white rounded-lg shadow-soft p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Program Outcomes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {programOutcomes.map((outcome) => (
            <div key={outcome.program} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-medium text-gray-800 mb-3">{outcome.program}</h3>
              <div className="space-y-4">
                {outcome.metrics.map((metric) => (
                  <div key={metric.name} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{metric.name}</span>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-900 mr-2">{metric.value}</span>
                      <span className={`text-xs ${
                        metric.change.startsWith('+') 
                          ? 'text-green-600' 
                          : metric.change.startsWith('-')
                          ? 'text-red-600'
                          : 'text-gray-500'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 