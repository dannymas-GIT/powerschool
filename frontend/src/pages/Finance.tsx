import React from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  BarChart, 
  PieChart, 
  FileText, 
  AlertCircle, 
  Calendar,
  Download
} from 'lucide-react';

// Mock data for financial metrics
const financialMetrics = [
  { 
    name: 'Annual Budget', 
    value: '$142.5M', 
    change: '+3.5%', 
    changeType: 'increase',
    icon: DollarSign
  },
  { 
    name: 'YTD Expenses', 
    value: '$98.2M', 
    change: '69%', 
    changeType: 'neutral',
    icon: TrendingUp
  },
  { 
    name: 'Revenue Collected', 
    value: '$104.3M', 
    change: '73%', 
    changeType: 'neutral',
    icon: DollarSign
  },
  { 
    name: 'Grants Secured', 
    value: '$12.8M', 
    change: '+$2.3M', 
    changeType: 'increase',
    icon: FileText
  },
];

// Mock data for budget allocation
const budgetAllocation = [
  { category: 'Instructional', percentage: 62, amount: '$88.35M', color: 'bg-primary-500' },
  { category: 'Operations', percentage: 15, amount: '$21.38M', color: 'bg-info-500' },
  { category: 'Administration', percentage: 8, amount: '$11.40M', color: 'bg-warning-500' },
  { category: 'Transportation', percentage: 7, amount: '$9.98M', color: 'bg-success-500' },
  { category: 'Facilities', percentage: 5, amount: '$7.13M', color: 'bg-danger-500' },
  { category: 'Technology', percentage: 3, amount: '$4.28M', color: 'bg-secondary-500' },
];

// Mock data for budget vs actual by month
const budgetVsActual = [
  { month: 'Jul', budgeted: 11.2, actual: 10.8 },
  { month: 'Aug', budgeted: 12.5, actual: 12.3 },
  { month: 'Sep', budgeted: 14.3, actual: 14.8 },
  { month: 'Oct', budgeted: 12.8, actual: 13.2 },
  { month: 'Nov', budgeted: 11.5, actual: 11.0 },
  { month: 'Dec', budgeted: 10.2, actual: 10.5 },
  { month: 'Jan', budgeted: 13.4, actual: 12.7 },
  { month: 'Feb', budgeted: 12.9, actual: 12.9 },
];

// Finance tools
const financeTools = [
  {
    name: 'Budget Planning',
    description: 'Create and manage annual budgets',
    icon: FileText,
    color: 'text-primary-500'
  },
  {
    name: 'Expense Approvals',
    description: 'Review and approve expense requests',
    icon: DollarSign,
    color: 'text-success-500'
  },
  {
    name: 'Financial Reports',
    description: 'Generate and view financial reports',
    icon: BarChart,
    color: 'text-info-500'
  },
  {
    name: 'Grant Management',
    description: 'Track and manage grants and funding',
    icon: FileText,
    color: 'text-warning-500'
  },
];

// Pending approvals
const pendingApprovals = [
  { 
    id: 1, 
    title: 'Science Department Equipment', 
    amount: '$12,500', 
    requestedBy: 'Robert Chen, Science Chair', 
    date: '11/15/2023',
    status: 'Urgent'
  },
  { 
    id: 2, 
    title: 'Athletic Transportation', 
    amount: '$8,750', 
    requestedBy: 'Sarah Miller, Athletic Director', 
    date: '11/14/2023',
    status: 'Review'
  },
  { 
    id: 3, 
    title: 'Professional Development Workshop', 
    amount: '$4,300', 
    requestedBy: 'Michael Garcia, Principal', 
    date: '11/12/2023',
    status: 'Review'
  },
];

export const Finance = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Finance Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Manage district finances, budgets, and approvals.
        </p>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialMetrics.map((metric) => {
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
                      : metric.changeType === 'decrease'
                      ? 'text-danger-500'
                      : 'text-gray-500'
                  }`}
                >
                  {metric.change}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {metric.changeType === 'neutral' ? ' of annual target' : ' from last year'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Allocation */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Budget Allocation
            </h2>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {budgetAllocation.map((item) => (
              <div key={item.category}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{item.percentage}%</span>
                    <span className="text-sm text-gray-500">{item.amount}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <button className="text-sm text-primary-600 font-medium">
              View Detailed Breakdown →
            </button>
          </div>
        </div>

        {/* Finance Tools */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Finance Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {financeTools.map((tool) => (
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Budget vs Actual Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-soft p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Budget vs. Actual Spending
            </h2>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600">Budgeted</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-info-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600">Actual</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {budgetVsActual.map((item) => (
              <div key={item.month} className="flex-1 flex flex-col items-center">
                <div className="w-full flex space-x-1 items-end mb-2 h-52">
                  <div 
                    className="w-1/2 bg-primary-500 rounded-t" 
                    style={{ height: `${(item.budgeted / 15) * 100}%` }}
                  ></div>
                  <div 
                    className="w-1/2 bg-info-500 rounded-t" 
                    style={{ height: `${(item.actual / 15) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600">{item.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <button className="text-sm text-primary-600 font-medium flex items-center justify-end ml-auto">
              <Download className="h-4 w-4 mr-1" />
              Export Data
            </button>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-lg shadow-soft p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Pending Approvals
            </h2>
            <AlertCircle className="h-5 w-5 text-warning-500" />
          </div>
          <div className="space-y-4">
            {pendingApprovals.map((approval) => (
              <div 
                key={approval.id} 
                className="p-3 border border-gray-200 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {approval.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {approval.requestedBy}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {approval.amount}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">
                    Requested on {approval.date}
                  </span>
                  <span 
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      approval.status === 'Urgent' 
                        ? 'bg-danger-50 text-danger-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {approval.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full text-sm font-medium text-white bg-primary-600 py-2 px-4 rounded-md hover:bg-primary-700">
            Review All Approvals
          </button>
        </div>
      </div>
    </div>
  );
}; 