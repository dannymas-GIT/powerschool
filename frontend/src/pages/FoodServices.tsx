import React, { useState } from 'react';
import { 
  Utensils, 
  Apple, 
  Search, 
  School, 
  BadgeDollarSign, 
  BarChart, 
  Download, 
  Plus, 
  Filter,
  ChevronDown,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

// Mock data for meal stats
const mealStats = {
  dailyMealsServed: 8250,
  schoolsParticipating: 22,
  freeReducedEligible: 3840,
  averageDailyParticipation: '78%',
  totalStaff: 65,
  averageMealCost: '$3.24'
};

// Mock data for meal programs
const mealPrograms = [
  { id: 'breakfast', name: 'School Breakfast Program', participants: 3250, daily: 2850 },
  { id: 'lunch', name: 'National School Lunch Program', participants: 8240, daily: 7150 },
  { id: 'snack', name: 'After School Snack Program', participants: 1850, daily: 1580 },
  { id: 'summer', name: 'Summer Food Service Program', participants: 2450, daily: 0 }
];

// Mock data for menu items
const menuItemsData = [
  {
    id: 1,
    name: 'Whole Grain Spaghetti with Marinara',
    category: 'Lunch',
    nutritionInfo: {
      calories: 380,
      protein: '12g',
      fat: '8g',
      carbs: '65g'
    },
    allergens: ['Wheat'],
    restrictions: ['Vegetarian'],
    popularity: 'High'
  },
  {
    id: 2,
    name: 'Grilled Chicken Sandwich',
    category: 'Lunch',
    nutritionInfo: {
      calories: 320,
      protein: '22g',
      fat: '9g',
      carbs: '38g'
    },
    allergens: ['Wheat'],
    restrictions: [],
    popularity: 'High'
  },
  {
    id: 3,
    name: 'Fresh Fruit Parfait',
    category: 'Breakfast',
    nutritionInfo: {
      calories: 210,
      protein: '6g',
      fat: '4g',
      carbs: '42g'
    },
    allergens: ['Dairy'],
    restrictions: ['Vegetarian'],
    popularity: 'Medium'
  },
  {
    id: 4,
    name: 'Garden Salad with Grilled Chicken',
    category: 'Lunch',
    nutritionInfo: {
      calories: 280,
      protein: '24g',
      fat: '12g',
      carbs: '18g'
    },
    allergens: [],
    restrictions: ['Gluten-Free'],
    popularity: 'Medium'
  },
  {
    id: 5,
    name: 'Whole Grain Cereal with Milk',
    category: 'Breakfast',
    nutritionInfo: {
      calories: 240,
      protein: '8g',
      fat: '5g',
      carbs: '45g'
    },
    allergens: ['Dairy', 'Wheat'],
    restrictions: ['Vegetarian'],
    popularity: 'High'
  },
  {
    id: 6,
    name: 'Turkey and Cheese Wrap',
    category: 'Lunch',
    nutritionInfo: {
      calories: 310,
      protein: '18g',
      fat: '10g',
      carbs: '35g'
    },
    allergens: ['Wheat', 'Dairy'],
    restrictions: [],
    popularity: 'High'
  }
];

// Mock data for inventory
const inventoryStatus = [
  { id: 1, item: 'Whole Grain Bread', quantity: 450, unit: 'loaves', status: 'In Stock', reorderPoint: 100 },
  { id: 2, item: 'Fresh Apples', quantity: 850, unit: 'lbs', status: 'In Stock', reorderPoint: 200 },
  { id: 3, item: 'Milk', quantity: 320, unit: 'gallons', status: 'Low Stock', reorderPoint: 350 },
  { id: 4, item: 'Chicken Breast', quantity: 560, unit: 'lbs', status: 'In Stock', reorderPoint: 150 },
  { id: 5, item: 'Romaine Lettuce', quantity: 120, unit: 'heads', status: 'Low Stock', reorderPoint: 150 },
  { id: 6, item: 'Sliced Cheese', quantity: 380, unit: 'lbs', status: 'In Stock', reorderPoint: 100 }
];

export const FoodServices = () => {
  const [activeTab, setActiveTab] = useState<'menus' | 'inventory' | 'participation'>('menus');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter menu items based on search query
  const filteredMenuItems = menuItemsData.filter(item => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Filter inventory items based on search query
  const filteredInventory = inventoryStatus.filter(item => {
    return item.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.status.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Food Services
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage school nutrition programs, menus, and inventory.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="border border-gray-300 bg-white rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
          <button className="bg-primary-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-primary-700 flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Menu Item
          </button>
        </div>
      </div>

      {/* Food Service Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <Utensils className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Daily Meals</span>
            <span className="text-2xl font-bold text-gray-900">{mealStats.dailyMealsServed}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <School className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Schools</span>
            <span className="text-2xl font-bold text-gray-900">{mealStats.schoolsParticipating}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <BadgeDollarSign className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Free/Reduced</span>
            <span className="text-2xl font-bold text-gray-900">{mealStats.freeReducedEligible}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <BarChart className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Participation</span>
            <span className="text-2xl font-bold text-gray-900">{mealStats.averageDailyParticipation}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <Utensils className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Staff</span>
            <span className="text-2xl font-bold text-gray-900">{mealStats.totalStaff}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-soft p-4">
          <div className="flex flex-col items-center">
            <BadgeDollarSign className="h-6 w-6 text-primary-500 mb-2" />
            <span className="text-sm font-medium text-gray-500">Avg. Cost</span>
            <span className="text-2xl font-bold text-gray-900">{mealStats.averageMealCost}</span>
          </div>
        </div>
      </div>

      {/* Food Services Dashboard Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('menus')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'menus'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Menus & Nutrition
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'inventory'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Inventory
          </button>
          <button
            onClick={() => setActiveTab('participation')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'participation'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Program Participation
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
            placeholder={activeTab === 'menus' ? "Search menu items..." : "Search inventory..."}
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

      {activeTab === 'menus' && (
        <div className="bg-white rounded-lg shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Menu Item
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nutrition
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Allergens
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Restrictions
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Popularity
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMenuItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Apple className="h-5 w-5 text-primary-500 mr-3" />
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-xs text-gray-500">
                        <div>{item.nutritionInfo.calories} cal</div>
                        <div className="grid grid-cols-3 gap-1">
                          <span>P: {item.nutritionInfo.protein}</span>
                          <span>F: {item.nutritionInfo.fat}</span>
                          <span>C: {item.nutritionInfo.carbs}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.allergens.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {item.allergens.map((allergen, idx) => (
                            <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                              {allergen}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-gray-500">None</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.restrictions.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {item.restrictions.map((restriction, idx) => (
                            <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              {restriction}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-gray-500">None</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.popularity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'inventory' && (
        <div className="bg-white rounded-lg shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reorder Point
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInventory.map((item) => {
                  const isLowStock = item.status === 'Low Stock';
                  
                  return (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.item}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.quantity} {item.unit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {isLowStock ? (
                            <AlertCircle className="h-4 w-4 text-yellow-500 mr-1.5" />
                          ) : (
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-1.5" />
                          )}
                          <span className={`text-sm font-medium ${isLowStock ? 'text-yellow-700' : 'text-green-700'}`}>
                            {item.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.reorderPoint} {item.unit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-primary-600 hover:text-primary-900 mr-3">
                          Update
                        </button>
                        <button className="text-primary-600 hover:text-primary-900">
                          Order
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

      {activeTab === 'participation' && (
        <>
          {/* Program Participation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mealPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-soft p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{program.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Total Participants:</span>
                  <span className="text-lg font-medium text-gray-900">{program.participants}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Daily Average:</span>
                  <span className="text-lg font-medium text-gray-900">{program.daily > 0 ? program.daily : 'Not Active'}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-500 rounded-full"
                    style={{ width: `${program.daily > 0 ? (program.daily / program.participants * 100) : 0}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-xs text-right text-gray-500">
                  {program.daily > 0 ? `${Math.round(program.daily / program.participants * 100)}% participation` : '0% (seasonal)'}
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="bg-white rounded-lg shadow-soft p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Participation Analytics</h3>
            <div className="flex justify-center items-center h-48">
              <div className="text-center">
                <BarChart className="h-12 w-12 text-primary-500 mx-auto mb-3" />
                <p className="text-gray-500">Detailed analytics and reporting coming soon.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}; 