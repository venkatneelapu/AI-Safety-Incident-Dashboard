import React from 'react';
import { Incident, Severity, SortOrder } from '../types';
import IncidentCard from './IncidentCard';
import { sortByDate } from '../utils/dateUtils';

interface IncidentListProps {
  incidents: Incident[];
  selectedSeverity: Severity | 'All';
  sortOrder: SortOrder;
}

const IncidentList: React.FC<IncidentListProps> = ({
  incidents,
  selectedSeverity,
  sortOrder
}) => {
  // Filter incidents by severity if needed
  const filteredIncidents = selectedSeverity === 'All'
    ? incidents
    : incidents.filter(incident => incident.severity === selectedSeverity);

  // Sort incidents by date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => 
    sortByDate(a.reported_at, b.reported_at, sortOrder === 'oldest')
  );

  if (sortedIncidents.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-500">No incidents found matching the current filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedIncidents.map(incident => (
        <IncidentCard key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;