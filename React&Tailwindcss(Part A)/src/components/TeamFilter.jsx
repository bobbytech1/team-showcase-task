/**
 * TeamFilter Component
 * 
 * Provides department filtering functionality for the team showcase with:
 * - Department selection dropdown
 * - Visual indicator of active filter
 * - Loading states during filter application
 * - Responsive layout
 */
import { useState } from 'react';
import { FiFilter, FiCheck } from 'react-icons/fi';

const TeamFilter = ({ 
  departments,        // Array of available departments for filtering
  onApplyFilter,      // Callback function when filter is applied
  selectedDepartment, // Currently active department filter
  isLoading           // Loading state from parent component
}) => {
  // Local state for the selected department before applying
  const [localDepartment, setLocalDepartment] = useState(selectedDepartment);

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 md:items-end items-center">
      {/* Department Selection Dropdown */}
      <div className="flex-1 md:max-w-xs w-[80%] relative">
        {/* Dropdown Label with Active Filter Indicator */}
        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Department
          {/* Show active filter badge when not 'All Departments' */}
          {selectedDepartment !== 'All Departments' && (
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Active: {selectedDepartment}
              <FiCheck className="ml-1" />
            </span>
          )}
        </label>

        {/* Department Select Input */}
        <select
          id="department"
          value={localDepartment}
          onChange={(e) => setLocalDepartment(e.target.value)}
          className="block w-full p-2 border outline-none border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          disabled={isLoading}
          aria-label="Select department to filter"
        >
          <option value="All Departments">All Departments</option>
          {/* Render department options, excluding any 'All' values */}
          {departments.filter(dept => dept !== 'All').map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Apply Filter Button */}
      <button
        onClick={() => onApplyFilter(localDepartment)}
        disabled={isLoading}
        className={`px-4 py-2 rounded-md h-[42px] flex items-center gap-2 transition-colors ${
          isLoading 
            ? 'bg-blue-400 cursor-not-allowed'  // Disabled state styling
            : 'bg-blue-600 hover:bg-blue-700 text-white'  // Active state styling
        }`}
        aria-label="Apply department filter"
      >
        {isLoading ? (
          // Loading spinner when filter is being applied
          <svg 
            className="animate-spin h-5 w-5 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          // Normal state with filter icon
          <>
            <FiFilter className="text-lg" aria-hidden="true" />
            Apply
          </>
        )}
      </button>
    </div>
  );
};

export default TeamFilter;