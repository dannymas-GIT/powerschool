import React, { useState } from 'react';
import { 
  Bus, 
  LocateFixed, 
  User, 
  Calendar, 
  Clock, 
  Search, 
  Download, 
  Plus, 
  AlertCircle,
  CheckCircle2,
  Map,
  Filter,
  Route,
  TimerReset
} from 'lucide-react';

// Mock data for transportation stats
const transportationStats = {
  totalBuses: 68,
  activeBuses: 62,
  totalRoutes: 45,
  dailyRiders: 3850,
  totalDrivers: 72,
  averageDailyMiles: 2860
};

// Mock data for bus status
const busStatus = {
  active: 62,
  maintenance: 4,
  outOfService: 2
};

// Mock data for routes
const routesData = [
  {
    id: 1,
    name: 'North Route 1',
    schools: ['Washington High School', 'Jefferson Elementary'],
    driver: 'Michael Johnson',
    busNumber: 'B-12',
    students: 45,
    startTime: '7:15 AM',
    endTime: '8:05 AM',
    status: 'Active',
    mileage: 12.5
  },
  {
    id: 2,
    name: 'South Route 3',
    schools: ['Lincoln Elementary', 'Central Middle School'],
    driver: 'Sarah Williams',
    busNumber: 'B-08',
    students: 52,
    startTime: '7:00 AM',
    endTime: '7:55 AM',
    status: 'Active',
    mileage: 14.2
  },
  {
    id: 3,
    name: 'East Route 2',
    schools: ['Springfield Alternative Academy', 'Washington High School'],
    driver: 'Robert Chen',
    busNumber: 'B-15',
    students: 38,
    startTime: '7:25 AM',
    endTime: '8:10 AM',
    status: 'Active',
    mileage: 10.8
  },
  {
    id: 4,
    name: 'West Route 4',
    schools: ['Jefferson High School', 'Lincoln Elementary'],
    driver: 'Lisa Thompson',
    busNumber: 'B-22',
    students: 48,
    startTime: '7:05 AM',
    endTime: '8:00 AM',
    status: 'Active',
    mileage: 15.6
  },
  {
    id: 5,
    name: 'Central Route 1',
    schools: ['Central Middle School', 'Jefferson Elementary'],
    driver: 'David Garcia',
    busNumber: 'B-05',
    students: 42,
    startTime: '7:10 AM',
    endTime: '8:00 AM',
    status: 'Active',
    mileage: 11.3
  }
];

// Bus fleet data
const busFleetData = [
  {
    id: 1, 
    busNumber: 'B-12',
    model: 'Thomas Saf-T-Liner C2',
    year: 2019,
    capacity: 72,
    status: 'Active',
    lastMaintenance: '2023-09-15',
    mileage: 24500,
    driver: 'Michael Johnson',
    notes: 'New tires installed in August 2023'
  },
  {
    id: 2, 
    busNumber: 'B-08',
    model: 'Blue Bird Vision',
    year: 2017,
    capacity: 78,
    status: 'Active',
    lastMaintenance: '2023-10-02',
    mileage: 35200,
    driver: 'Sarah Williams',
    notes: 'Scheduled for major maintenance in December'
  },
  {
    id: 3, 
    busNumber: 'B-15',
    model: 'IC Bus CE Series',
    year: 2020,
    capacity: 72,
    status: 'Active',
    lastMaintenance: '2023-08-28',
    mileage: 18300,
    driver: 'Robert Chen',
    notes: 'GPS system upgraded in September'
  },
  {
    id: 4, 
    busNumber: 'B-22',
    model: 'Thomas Saf-T-Liner C2',
    year: 2018,
    capacity: 72,
    status: 'Active',
    lastMaintenance: '2023-09-10',
    mileage: 28900,
    driver: 'Lisa Thompson',
    notes: ''
  },
  {
    id: 5, 
    busNumber: 'B-05',
    model: 'Blue Bird All American',
    year: 2016,
    capacity: 84,
    status: 'Active',
    lastMaintenance: '2023-10-05',
    mileage: 42600,
    driver: 'David Garcia',
    notes: 'AC repaired in August'
  },
  {
    id: 6, 
    busNumber: 'B-17',
    model: 'IC Bus CE Series',
    year: 2018,
    capacity: 72,
    status: 'Maintenance',
    lastMaintenance: '2023-10-12',
    mileage: 31500,
    driver: 'Unassigned',
    notes: 'In shop for transmission issues'
  },
  {
    id: 7, 
    busNumber: 'B-30',
    model: 'Thomas Saf-T-Liner HDX',
    year: 2020,
    capacity: 90,
    status: 'Active',
    lastMaintenance: '2023-09-20',
    mileage: 15800,
    driver: 'James Wilson',
    notes: 'Special needs equipment installed'
  },
  {
    id: 8, 
    busNumber: 'B-03',
    model: 'Blue Bird Vision',
    year: 2015,
    capacity: 78,
    status: 'Out of Service',
    lastMaintenance: '2023-08-15',
    mileage: 58200,
    driver: 'Unassigned',
    notes: 'Major engine repairs needed - evaluating replacement'
  }
];

export const Transportation = () => {
  const [activeTab, setActiveTab] = useState<'routes' | 'fleet' | 'scheduling'>('routes');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter buses based on search query
  const filteredBuses = busFleetData.filter(bus => {
    return bus.busNumber.toLowerCase().includes(searchQuery.toLowerCase()) || 
           bus.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
           bus.model.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Filter routes based on search query
  const filteredRoutes = routesData.filter(route => {
    return route.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           route.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
           route.busNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
           route.schools.some(school => school.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Transportation
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage district transportation, bus routes, and fleet maintenance.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </button>
          <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700 flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Route
          </button>
        </div>
      </div>

      {/* Transportation Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <Bus className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Total Buses</span>
            <span className="text-2xl font-bold text-gray-900">{transportationStats.totalBuses}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <Route className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Bus Routes</span>
            <span className="text-2xl font-bold text-gray-900">{transportationStats.totalRoutes}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <User className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Daily Riders</span>
            <span className="text-2xl font-bold text-gray-900">{transportationStats.dailyRiders}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <LocateFixed className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Daily Miles</span>
            <span className="text-2xl font-bold text-gray-900">{transportationStats.averageDailyMiles}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <User className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Drivers</span>
            <span className="text-2xl font-bold text-gray-900">{transportationStats.totalDrivers}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <CheckCircle2 className="h-6 w-6 text-green-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Active Buses</span>
            <span className="text-2xl font-bold text-gray-900">{busStatus.active}</span>
          </div>
        </div>
      </div>

      {/* Transportation Dashboard Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('routes')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'routes'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Bus Routes
          </button>
          <button
            onClick={() => setActiveTab('fleet')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'fleet'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Fleet Management
          </button>
          <button
            onClick={() => setActiveTab('scheduling')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'scheduling'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Scheduling
          </button>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={activeTab === 'routes' ? "Search routes..." : "Search buses..."}
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <button className="border border-gray-300 bg-white rounded-md p-2 flex items-center text-sm font-medium hover:bg-gray-50">
            <Filter className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      {activeTab === 'routes' && (
        <>
          {/* Routes Table */}
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Route Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Schools
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Driver / Bus
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Schedule
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Miles
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRoutes.map((route) => (
                    <tr key={route.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Route className="h-5 w-5 text-primary-500 mr-3" />
                          <div className="text-sm font-medium text-gray-900">{route.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {route.schools.map((school, index) => (
                            <div key={index}>{school}</div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{route.driver}</div>
                        <div className="text-sm text-gray-500">{route.busNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {route.students}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{route.startTime} - {route.endTime}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {route.mileage} mi
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
                        <button className="text-primary-600 hover:text-primary-900">View Map</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'fleet' && (
        <>
          {/* Bus Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-soft p-4 flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-lg font-semibold text-gray-900">{busStatus.active}</div>
                <div className="text-sm text-gray-500">Active Buses</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-soft p-4 flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <TimerReset className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-lg font-semibold text-gray-900">{busStatus.maintenance}</div>
                <div className="text-sm text-gray-500">In Maintenance</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-soft p-4 flex items-center">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <div className="text-lg font-semibold text-gray-900">{busStatus.outOfService}</div>
                <div className="text-sm text-gray-500">Out of Service</div>
              </div>
            </div>
          </div>

          {/* Fleet Table */}
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bus Info
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Model/Year
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Capacity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Maintenance
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Driver
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBuses.map((bus) => {
                    let statusColor = 'bg-green-100 text-green-800';
                    
                    if (bus.status === 'Maintenance') {
                      statusColor = 'bg-blue-100 text-blue-800';
                    } else if (bus.status === 'Out of Service') {
                      statusColor = 'bg-red-100 text-red-800';
                    }
                    
                    return (
                      <tr key={bus.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Bus className="h-5 w-5 text-gray-400 mr-3" />
                            <div className="text-sm font-medium text-gray-900">{bus.busNumber}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{bus.model}</div>
                          <div className="text-sm text-gray-500">{bus.year}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {bus.capacity} students
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                            {bus.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{bus.lastMaintenance}</div>
                          <div className="text-sm text-gray-500">{bus.mileage.toLocaleString()} miles</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {bus.driver}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-primary-600 hover:text-primary-900 mr-3">History</button>
                          <button className="text-primary-600 hover:text-primary-900">Details</button>
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

      {activeTab === 'scheduling' && (
        <div className="bg-white rounded-lg shadow-soft p-6 flex items-center justify-center h-64">
          <div className="text-center">
            <Calendar className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Schedule Management</h3>
            <p className="text-gray-500 mb-4">Advanced scheduling tools are coming soon.</p>
            <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700">
              Coming Soon
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 