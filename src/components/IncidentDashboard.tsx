import React, { useState } from 'react';
import { Incident, Severity, SortOrder } from '../types';
import { mockIncidents } from '../data/mockIncidents';
import DashboardHeader from './DashboardHeader';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';

const IncidentDashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [selectedSeverity, setSelectedSeverity] = useState<Severity | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [showForm, setShowForm] = useState(false);

  const handleNewIncident = (newIncident: Omit<Incident, 'id'>) => {
    const incident: Incident = {
      ...newIncident,
      id: Math.max(0, ...incidents.map(i => i.id)) + 1
    };
    
    setIncidents([incident, ...incidents]);
    setShowForm(false);
  };

  // Get count of filtered incidents
  const filteredCount = selectedSeverity === 'All'
    ? incidents.length
    : incidents.filter(incident => incident.severity === selectedSeverity).length;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <DashboardHeader
        selectedSeverity={selectedSeverity}
        setSelectedSeverity={setSelectedSeverity}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        incidentCount={filteredCount}
      />
      
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          {showForm ? 'Cancel' : 'Report New Incident'}
        </button>
      </div>
      
      {showForm && (
        <div className="mb-6 animate-fadeIn">
          <IncidentForm onSubmit={handleNewIncident} />
        </div>
      )}
      
      <IncidentList
        incidents={incidents}
        selectedSeverity={selectedSeverity}
        sortOrder={sortOrder}
      />
    </div>
  );
};

export default IncidentDashboard;