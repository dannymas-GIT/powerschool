import React, { useState } from 'react';
import { 
  Laptop, 
  Search, 
  Server, 
  Tablet, 
  Smartphone, 
  Printer, 
  Monitor, 
  WifiIcon, 
  Headphones,
  Database,
  Filter,
  Download,
  Plus,
  AlertCircle,
  CheckCircle2,
  Clock,
  RefreshCw
} from 'lucide-react';

// Mock data for device categories
const deviceCategories = [
  { id: 'laptops', name: 'Laptops', count: 1250, icon: <Laptop className="h-5 w-5" /> },
  { id: 'desktops', name: 'Desktops', count: 650, icon: <Monitor className="h-5 w-5" /> },
  { id: 'tablets', name: 'Tablets', count: 420, icon: <Tablet className="h-5 w-5" /> },
  { id: 'smartphones', name: 'Smartphones', count: 180, icon: <Smartphone className="h-5 w-5" /> },
  { id: 'printers', name: 'Printers', count: 85, icon: <Printer className="h-5 w-5" /> },
  { id: 'servers', name: 'Servers', count: 12, icon: <Server className="h-5 w-5" /> },
  { id: 'networking', name: 'Networking', count: 95, icon: <WifiIcon className="h-5 w-5" /> },
  { id: 'peripherals', name: 'Peripherals', count: 320, icon: <Headphones className="h-5 w-5" /> }
];

// Mock data for device allocation
const deviceAllocation = [
  { name: 'Classrooms', percentage: 45 },
  { name: 'Administration', percentage: 20 },
  { name: 'Labs', percentage: 15 },
  { name: 'Library', percentage: 10 },
  { name: 'Other', percentage: 10 }
];

// Mock data for service status
const serviceStatuses = [
  { id: 1, name: 'Email Service', status: 'operational', uptime: '99.9%', lastIncident: '30 days ago' },
  { id: 2, name: 'Student Information System', status: 'operational', uptime: '99.7%', lastIncident: '14 days ago' },
  { id: 3, name: 'Learning Management System', status: 'issues', uptime: '98.1%', lastIncident: '2 days ago' },
  { id: 4, name: 'District Website', status: 'operational', uptime: '99.8%', lastIncident: '60 days ago' },
  { id: 5, name: 'File Storage', status: 'maintenance', uptime: '99.5%', lastIncident: 'Scheduled today' },
  { id: 6, name: 'Printing Services', status: 'operational', uptime: '99.6%', lastIncident: '45 days ago' },
  { id: 7, name: 'WiFi Network', status: 'operational', uptime: '99.5%', lastIncident: '7 days ago' },
  { id: 8, name: 'Authentication Service', status: 'operational', uptime: '99.9%', lastIncident: '90 days ago' }
];

// Mock data for devices
const devicesData = [
  { 
    id: 1, 
    name: 'Dell Latitude 5420', 
    type: 'laptops', 
    assigned_to: 'Faculty', 
    location: 'Washington High School',
    purchase_date: '2022-08-15',
    warranty_until: '2025-08-15',
    status: 'Active',
    last_update: '2023-10-05'
  },
  { 
    id: 2, 
    name: 'HP EliteDesk 800 G6', 
    type: 'desktops', 
    assigned_to: 'Computer Lab', 
    location: 'Lincoln Elementary School',
    purchase_date: '2021-06-10',
    warranty_until: '2024-06-10',
    status: 'Active',
    last_update: '2023-09-20'
  },
  { 
    id: 3, 
    name: 'Apple iPad 10.2', 
    type: 'tablets', 
    assigned_to: 'Student - Grade 4', 
    location: 'Jefferson Elementary School',
    purchase_date: '2022-09-01',
    warranty_until: '2024-09-01',
    status: 'Active',
    last_update: '2023-10-15'
  },
  { 
    id: 4, 
    name: 'HP LaserJet Pro M404', 
    type: 'printers', 
    assigned_to: 'Admin Office', 
    location: 'Central Middle School',
    purchase_date: '2021-01-15',
    warranty_until: '2024-01-15',
    status: 'Maintenance',
    last_update: '2023-10-12'
  },
  { 
    id: 5, 
    name: 'Dell PowerEdge R740', 
    type: 'servers', 
    assigned_to: 'District Data Center', 
    location: 'Admin Building',
    purchase_date: '2020-11-05',
    warranty_until: '2025-11-05',
    status: 'Active',
    last_update: '2023-10-01'
  },
  { 
    id: 6, 
    name: 'Cisco Meraki MR46', 
    type: 'networking', 
    assigned_to: 'IT Department', 
    location: 'Washington High School',
    purchase_date: '2022-03-12',
    warranty_until: '2027-03-12',
    status: 'Active',
    last_update: '2023-09-10'
  },
  { 
    id: 7, 
    name: 'Samsung Galaxy Tab A8', 
    type: 'tablets', 
    assigned_to: 'Student - Special Ed', 
    location: 'Springfield Alternative Academy',
    purchase_date: '2022-09-01',
    warranty_until: '2024-09-01',
    status: 'Repair',
    last_update: '2023-10-18'
  },
  { 
    id: 8, 
    name: 'Lenovo ThinkCentre M720', 
    type: 'desktops', 
    assigned_to: 'Library', 
    location: 'Washington High School',
    purchase_date: '2021-07-22',
    warranty_until: '2024-07-22',
    status: 'Active',
    last_update: '2023-09-15'
  }
];

// Budget breakdown
const techBudget = {
  total: 2450000,
  categories: [
    { name: 'Hardware', amount: 1200000 },
    { name: 'Software', amount: 450000 },
    { name: 'Services', amount: 350000 },
    { name: 'Staff', amount: 380000 },
    { name: 'Training', amount: 70000 }
  ]
};

export const Technology = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'inventory' | 'services' | 'budget'>('inventory');

  // Filter devices based on selected category and search query
  const filteredDevices = devicesData.filter(device => {
    const matchesCategory = selectedCategory ? device.type === selectedCategory : true;
    const matchesSearch = device.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         device.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  // Calculate status counts
  const statusCounts = {
    active: devicesData.filter(d => d.status === 'Active').length,
    maintenance: devicesData.filter(d => d.status === 'Maintenance').length,
    repair: devicesData.filter(d => d.status === 'Repair').length,
    retired: devicesData.filter(d => d.status === 'Retired').length,
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
            Technology
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage district technology assets, services, and infrastructure.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
          <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700 flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Device
          </button>
        </div>
      </div>

      {/* Technology Dashboard Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'inventory'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Device Inventory
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'services'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            IT Services
          </button>
          <button
            onClick={() => setActiveTab('budget')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'budget'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Budget & Planning
          </button>
        </nav>
      </div>

      {activeTab === 'inventory' && (
        <>
          {/* Overview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">Active</div>
                  <div className="text-xl font-semibold text-gray-900">{statusCounts.active}</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">Maintenance</div>
                  <div className="text-xl font-semibold text-gray-900">{statusCounts.maintenance}</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <RefreshCw className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">Repair</div>
                  <div className="text-xl font-semibold text-gray-900">{statusCounts.repair}</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="bg-gray-100 p-3 rounded-full">
                  <AlertCircle className="h-6 w-6 text-gray-600" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">Retired</div>
                  <div className="text-xl font-semibold text-gray-900">{statusCounts.retired}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Device Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {deviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                  selectedCategory === category.id
                    ? 'bg-primary-50 border-2 border-primary-500'
                    : 'bg-white border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className={`p-3 rounded-full ${
                  selectedCategory === category.id ? 'bg-primary-100' : 'bg-gray-100'
                }`}>
                  {category.icon}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} devices</div>
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
                placeholder="Search devices..."
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

          {/* Devices Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Device
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Assigned To
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purchase Date
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
                  {filteredDevices.map((device) => {
                    const categoryObj = deviceCategories.find(c => c.id === device.type);
                    let statusColor = 'bg-green-100 text-green-800';
                    
                    if (device.status === 'Maintenance') {
                      statusColor = 'bg-blue-100 text-blue-800';
                    } else if (device.status === 'Repair') {
                      statusColor = 'bg-yellow-100 text-yellow-800';
                    } else if (device.status === 'Retired') {
                      statusColor = 'bg-gray-100 text-gray-800';
                    }
                    
                    return (
                      <tr key={device.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                              {categoryObj?.icon}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{device.name}</div>
                              <div className="text-xs text-gray-500">Warranty until: {device.warranty_until}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {categoryObj?.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {device.assigned_to}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {device.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {device.purchase_date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                            {device.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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

          {/* Device Allocation */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Device Allocation
            </h2>
            <div className="space-y-4">
              {deviceAllocation.map((item) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === 'services' && (
        <>
          {/* IT Services Status */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                IT Service Status
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {serviceStatuses.map((service) => {
                let statusIndicator;
                
                if (service.status === 'operational') {
                  statusIndicator = (
                    <div className="flex items-center text-green-600">
                      <CheckCircle2 className="h-5 w-5 mr-1.5" />
                      <span>Operational</span>
                    </div>
                  );
                } else if (service.status === 'issues') {
                  statusIndicator = (
                    <div className="flex items-center text-yellow-600">
                      <AlertCircle className="h-5 w-5 mr-1.5" />
                      <span>Issues Detected</span>
                    </div>
                  );
                } else if (service.status === 'maintenance') {
                  statusIndicator = (
                    <div className="flex items-center text-blue-600">
                      <RefreshCw className="h-5 w-5 mr-1.5" />
                      <span>Scheduled Maintenance</span>
                    </div>
                  );
                }
                
                return (
                  <div key={service.id} className="px-6 py-4">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{service.name}</h4>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">Uptime: {service.uptime}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-xs text-gray-500">Last incident: {service.lastIncident}</span>
                        </div>
                      </div>
                      <div>
                        {statusIndicator}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {activeTab === 'budget' && (
        <>
          {/* Technology Budget */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Technology Budget
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {formatCurrency(techBudget.total)}
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Annual technology budget for the current fiscal year
              </p>
              <div className="space-y-4">
                {techBudget.categories.map((category, index) => (
                  <div key={category.name} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full bg-primary-${(index + 3) * 100}`}></div>
                      <span className="ml-2 text-sm font-medium text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-900">{formatCurrency(category.amount)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Budget Allocation
              </h3>
              <div className="relative h-64">
                {/* Simple pie chart representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    {techBudget.categories.map((category, i) => {
                      const percentage = (category.amount / techBudget.total) * 100;
                      let cumulativePercentage = 0;
                      
                      for (let j = 0; j < i; j++) {
                        cumulativePercentage += (techBudget.categories[j].amount / techBudget.total) * 100;
                      }
                      
                      const startAngle = (cumulativePercentage / 100) * 360;
                      const endAngle = startAngle + (percentage / 100) * 360;
                      
                      const startAngleRad = (startAngle - 90) * (Math.PI / 180);
                      const endAngleRad = (endAngle - 90) * (Math.PI / 180);
                      
                      const x1 = 50 + 40 * Math.cos(startAngleRad);
                      const y1 = 50 + 40 * Math.sin(startAngleRad);
                      const x2 = 50 + 40 * Math.cos(endAngleRad);
                      const y2 = 50 + 40 * Math.sin(endAngleRad);
                      
                      const largeArc = percentage > 50 ? 1 : 0;
                      
                      return (
                        <path
                          key={category.name}
                          d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                          fill={`hsl(${210 + i * 30}, 70%, ${50 + i * 5}%)`}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techBudget.categories.map((category, i) => (
                  <div key={category.name} className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: `hsl(${210 + i * 30}, 70%, ${50 + i * 5}%)` }}
                    ></div>
                    <div>
                      <div className="text-xs font-medium text-gray-700">{category.name}</div>
                      <div className="text-xs text-gray-500">
                        {((category.amount / techBudget.total) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}; 