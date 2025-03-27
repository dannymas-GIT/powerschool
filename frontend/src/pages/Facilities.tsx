import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  MapPin, 
  Warehouse, 
  CalendarClock, 
  Settings, 
  Wrench, 
  Activity, 
  Circle,
  ListFilter,
  Plus,
  Download,
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  AlertCircle
} from 'lucide-react';

// Mock data for facility types
const facilityTypes = [
  { id: 'academic', name: 'Academic Buildings', count: 18 },
  { id: 'athletics', name: 'Athletic Facilities', count: 12 },
  { id: 'administrative', name: 'Administrative', count: 6 },
  { id: 'supportServices', name: 'Support Services', count: 9 },
  { id: 'outdoor', name: 'Outdoor Spaces', count: 14 }
];

// Mock data for work order status
const workOrderStatuses = {
  open: 24,
  inProgress: 16,
  completed: 128,
  onHold: 8
};

// Mock data for facilities
const facilitiesData = [
  {
    id: 1,
    name: 'Main Academic Building',
    type: 'academic',
    location: 'Washington High School',
    squareFeet: 45000,
    yearBuilt: 1985,
    lastRenovation: 2018,
    condition: 'Good',
    maintenanceStatus: 'Up to date',
    upcomingProjects: 2
  },
  {
    id: 2,
    name: 'Science Wing',
    type: 'academic',
    location: 'Washington High School',
    squareFeet: 18000,
    yearBuilt: 1995,
    lastRenovation: 2020,
    condition: 'Excellent',
    maintenanceStatus: 'Up to date',
    upcomingProjects: 0
  },
  {
    id: 3,
    name: 'Gymnasium',
    type: 'athletics',
    location: 'Central Middle School',
    squareFeet: 24000,
    yearBuilt: 1972,
    lastRenovation: 2010,
    condition: 'Fair',
    maintenanceStatus: 'Maintenance needed',
    upcomingProjects: 1
  },
  {
    id: 4,
    name: 'Administration Building',
    type: 'administrative',
    location: 'District Office',
    squareFeet: 12000,
    yearBuilt: 2005,
    lastRenovation: 2020,
    condition: 'Excellent',
    maintenanceStatus: 'Up to date',
    upcomingProjects: 0
  },
  {
    id: 5,
    name: 'Cafeteria',
    type: 'supportServices',
    location: 'Lincoln Elementary School',
    squareFeet: 8500,
    yearBuilt: 1978,
    lastRenovation: 2015,
    condition: 'Good',
    maintenanceStatus: 'Up to date',
    upcomingProjects: 1
  },
  {
    id: 6,
    name: 'Football Field',
    type: 'outdoor',
    location: 'Washington High School',
    squareFeet: 80000,
    yearBuilt: 1985,
    lastRenovation: 2018,
    condition: 'Good',
    maintenanceStatus: 'Up to date',
    upcomingProjects: 1
  },
  {
    id: 7,
    name: 'Library',
    type: 'academic',
    location: 'Jefferson High School',
    squareFeet: 15000,
    yearBuilt: 1968,
    lastRenovation: 2012,
    condition: 'Good',
    maintenanceStatus: 'Up to date',
    upcomingProjects: 0
  },
  {
    id: 8,
    name: 'Auditorium',
    type: 'supportServices',
    location: 'Washington High School',
    squareFeet: 12500,
    yearBuilt: 1985,
    lastRenovation: 2015,
    condition: 'Good',
    maintenanceStatus: 'Minor issues',
    upcomingProjects: 1
  }
];

// Mock data for maintenance requests
const maintenanceRequests = [
  {
    id: 1,
    facility: 'Main Academic Building',
    location: 'Washington High School',
    requestType: 'Plumbing',
    description: 'Leaking sink in Room 204',
    priority: 'Medium',
    requestedBy: 'John Smith',
    requestDate: '2023-10-15',
    status: 'Open'
  },
  {
    id: 2,
    facility: 'Gymnasium',
    location: 'Central Middle School',
    requestType: 'HVAC',
    description: 'Air conditioning not working properly',
    priority: 'High',
    requestedBy: 'Mary Johnson',
    requestDate: '2023-10-12',
    status: 'In Progress'
  },
  {
    id: 3,
    facility: 'Science Wing',
    location: 'Washington High School',
    requestType: 'Electrical',
    description: 'Outlets not working in Lab 3',
    priority: 'High',
    requestedBy: 'Robert Chen',
    requestDate: '2023-10-14',
    status: 'Open'
  },
  {
    id: 4,
    facility: 'Cafeteria',
    location: 'Lincoln Elementary School',
    requestType: 'Appliance',
    description: 'Dishwasher malfunction',
    priority: 'Medium',
    requestedBy: 'Lisa Wong',
    requestDate: '2023-10-10',
    status: 'Completed'
  },
  {
    id: 5,
    facility: 'Administration Building',
    location: 'District Office',
    requestType: 'Structural',
    description: 'Ceiling tile damaged in conference room',
    priority: 'Low',
    requestedBy: 'David Garcia',
    requestDate: '2023-10-16',
    status: 'Open'
  }
];

// Mock data for upcoming projects
const upcomingProjects = [
  {
    id: 1,
    name: 'Gymnasium Floor Refinishing',
    facility: 'Gymnasium',
    location: 'Central Middle School',
    budget: 45000,
    startDate: '2023-12-15',
    endDate: '2023-12-30',
    status: 'Scheduled'
  },
  {
    id: 2,
    name: 'Cafeteria Expansion',
    facility: 'Cafeteria',
    location: 'Lincoln Elementary School',
    budget: 250000,
    startDate: '2024-06-10',
    endDate: '2024-08-20',
    status: 'Approved'
  },
  {
    id: 3,
    name: 'Football Field Lighting Upgrade',
    facility: 'Football Field',
    location: 'Washington High School',
    budget: 85000,
    startDate: '2024-05-15',
    endDate: '2024-06-30',
    status: 'Planning'
  },
  {
    id: 4,
    name: 'Auditorium Sound System Replacement',
    facility: 'Auditorium',
    location: 'Washington High School',
    budget: 120000,
    startDate: '2024-03-01',
    endDate: '2024-04-15',
    status: 'Approved'
  },
  {
    id: 5,
    name: 'Main Building Roof Repair',
    facility: 'Main Academic Building',
    location: 'Washington High School',
    budget: 180000,
    startDate: '2024-07-01',
    endDate: '2024-08-15',
    status: 'Planning'
  }
];

export const Facilities = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'buildings' | 'maintenance' | 'projects'>('buildings');

  // Filter facilities based on selected type and search query
  const filteredFacilities = facilitiesData.filter(facility => {
    const matchesType = selectedType ? facility.type === selectedType : true;
    const matchesSearch = facility.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         facility.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleTypeClick = (typeId: string) => {
    setSelectedType(selectedType === typeId ? null : typeId);
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Facilities
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage school buildings, maintenance, and facility projects.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </button>
          <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700 flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Facility
          </button>
        </div>
      </div>

      {/* Facilities Dashboard Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('buildings')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'buildings'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Buildings & Facilities
          </button>
          <button
            onClick={() => setActiveTab('maintenance')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'maintenance'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Maintenance Requests
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'projects'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Projects & Planning
          </button>
        </nav>
      </div>

      {activeTab === 'buildings' && (
        <>
          {/* Building Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {facilityTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeClick(type.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                  selectedType === type.id
                    ? 'bg-primary-50 border-2 border-primary-500'
                    : 'bg-white border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="text-lg font-bold text-gray-900">{type.count}</div>
                <div className="text-sm text-gray-600">{type.name}</div>
              </button>
            ))}
          </div>

          {/* Search and Filtering */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search facilities..."
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <button className="border border-gray-300 bg-white rounded-md p-2 flex items-center text-sm font-medium hover:bg-gray-50">
                <ListFilter className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Facilities List */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Facility Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Square Feet
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Year Built
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Condition
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Maintenance
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredFacilities.map((facility) => {
                    const typeObj = facilityTypes.find(t => t.id === facility.type);
                    let conditionColor = 'bg-green-100 text-green-800';
                    
                    if (facility.condition === 'Fair') {
                      conditionColor = 'bg-yellow-100 text-yellow-800';
                    } else if (facility.condition === 'Poor') {
                      conditionColor = 'bg-red-100 text-red-800';
                    }
                    
                    let maintenanceColor = 'bg-green-100 text-green-800';
                    
                    if (facility.maintenanceStatus === 'Minor issues') {
                      maintenanceColor = 'bg-yellow-100 text-yellow-800';
                    } else if (facility.maintenanceStatus === 'Maintenance needed') {
                      maintenanceColor = 'bg-orange-100 text-orange-800';
                    } else if (facility.maintenanceStatus === 'Critical issues') {
                      maintenanceColor = 'bg-red-100 text-red-800';
                    }
                    
                    return (
                      <tr key={facility.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Building2 className="h-5 w-5 text-gray-400 mr-3" />
                            <div className="text-sm font-medium text-gray-900">{facility.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {typeObj?.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {facility.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {facility.squareFeet.toLocaleString()} sq ft
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {facility.yearBuilt} (Renovated: {facility.lastRenovation})
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${conditionColor}`}>
                            {facility.condition}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${maintenanceColor}`}>
                            {facility.maintenanceStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-3">
                            <button className="text-primary-600 hover:text-primary-900">Details</button>
                            {facility.upcomingProjects > 0 && (
                              <div className="bg-blue-100 text-blue-800 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
                                {facility.upcomingProjects} projects
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'maintenance' && (
        <>
          {/* Maintenance Request Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">Open</div>
                  <div className="text-xl font-semibold text-gray-900">{workOrderStatuses.open}</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">In Progress</div>
                  <div className="text-xl font-semibold text-gray-900">{workOrderStatuses.inProgress}</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">Completed</div>
                  <div className="text-xl font-semibold text-gray-900">{workOrderStatuses.completed}</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="bg-gray-100 p-3 rounded-full">
                  <ClipboardList className="h-6 w-6 text-gray-600" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">On Hold</div>
                  <div className="text-xl font-semibold text-gray-900">{workOrderStatuses.onHold}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Requests Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Maintenance Requests</h3>
              <button className="text-primary-600 hover:text-primary-900 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Request ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Facility/Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Requested
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
                  {maintenanceRequests.map((request) => {
                    let priorityColor = 'bg-yellow-100 text-yellow-800';
                    if (request.priority === 'High') {
                      priorityColor = 'bg-red-100 text-red-800';
                    } else if (request.priority === 'Low') {
                      priorityColor = 'bg-green-100 text-green-800';
                    }
                    
                    let statusColor = 'bg-yellow-100 text-yellow-800';
                    if (request.status === 'In Progress') {
                      statusColor = 'bg-blue-100 text-blue-800';
                    } else if (request.status === 'Completed') {
                      statusColor = 'bg-green-100 text-green-800';
                    } else if (request.status === 'On Hold') {
                      statusColor = 'bg-gray-100 text-gray-800';
                    }
                    
                    return (
                      <tr key={request.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          #{request.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{request.facility}</div>
                          <div className="text-xs text-gray-400">{request.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {request.requestType}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {request.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColor}`}>
                            {request.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{request.requestDate}</div>
                          <div className="text-xs text-gray-400">by {request.requestedBy}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-primary-600 hover:text-primary-900">
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'projects' && (
        <>
          {/* Projects Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Upcoming Facility Projects</h3>
              <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700 flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Facility
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Budget
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timeline
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
                  {upcomingProjects.map((project) => {
                    let statusColor = 'bg-blue-100 text-blue-800';
                    if (project.status === 'Scheduled') {
                      statusColor = 'bg-green-100 text-green-800';
                    } else if (project.status === 'In Progress') {
                      statusColor = 'bg-yellow-100 text-yellow-800';
                    } else if (project.status === 'Completed') {
                      statusColor = 'bg-purple-100 text-purple-800';
                    }
                    
                    return (
                      <tr key={project.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{project.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{project.facility}</div>
                          <div className="text-xs text-gray-400">{project.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {formatCurrency(project.budget)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{project.startDate}</div>
                          <div className="text-xs text-gray-400">to {project.endDate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-primary-600 hover:text-primary-900 mr-4">
                            Edit
                          </button>
                          <button className="text-primary-600 hover:text-primary-900">
                            Details
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Project Budget Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Project Budget Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-500">Total Projects Budget</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(upcomingProjects.reduce((sum, project) => sum + project.budget, 0))}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-500">Active Projects</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {upcomingProjects.filter(p => p.status === 'In Progress' || p.status === 'Scheduled').length}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-500">Planning/Approval</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {upcomingProjects.filter(p => p.status === 'Planning' || p.status === 'Approved').length}
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="h-64 relative">
                  {/* Simple bar chart for project budgets */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-around h-48">
                    {upcomingProjects.map((project, index) => {
                      const maxBudget = Math.max(...upcomingProjects.map(p => p.budget));
                      const height = (project.budget / maxBudget) * 100;
                      let bgColor = 'bg-primary-500';
                      
                      // Alternate colors for better visualization
                      if (index % 2 === 1) {
                        bgColor = 'bg-info-500';
                      }
                      
                      return (
                        <div key={project.id} className="flex flex-col items-center w-1/5">
                          <div 
                            className={`w-12 ${bgColor} rounded-t`}
                            style={{ height: `${height}%` }}
                            title={`${project.name}: ${formatCurrency(project.budget)}`}
                          ></div>
                          <div className="mt-2 text-xs text-gray-500 text-center w-20 truncate" title={project.name}>
                            {project.name.split(' ')[0]}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}; 