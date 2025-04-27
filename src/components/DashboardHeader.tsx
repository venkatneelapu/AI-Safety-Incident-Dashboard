import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Severity, SortOrder } from '../types';

interface DashboardHeaderProps {
  selectedSeverity: Severity | 'All';
  setSelectedSeverity: (severity: Severity | 'All') => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  incidentCount: number;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  selectedSeverity,
  setSelectedSeverity,
  sortOrder,
  setSortOrder,
  incidentCount
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <AlertTriangle size={24} className="text-blue-600 mr-2" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">AI Safety Incident Dashboard</h1>
        </div>
        
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">{incidentCount}</span> {incidentCount === 1 ? 'incident' : 'incidents'} reported
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-1/2">
          <label htmlFor="severity-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Severity
          </label>
          <div className="relative">
            <select
              id="severity-filter"
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value as Severity | 'All')}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="All">All Severities</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        
        <div className="w-full sm:w-1/2">
          <label htmlFor="sort-order" className="block text-sm font-medium text-gray-700 mb-1">
            Sort by Date
          </label>
          <div className="relative">
            <select
              id="sort-order"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;