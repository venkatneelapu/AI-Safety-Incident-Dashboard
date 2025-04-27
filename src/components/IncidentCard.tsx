import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Incident } from '../types';
import { formatDate } from '../utils/dateUtils';
import SeverityBadge from './SeverityBadge';

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md mb-4">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900 mb-1 sm:mb-0">{incident.title}</h3>
          <div className="flex items-center space-x-3">
            <SeverityBadge severity={incident.severity} />
            <span className="text-sm text-gray-500">{formatDate(incident.reported_at)}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={toggleExpand}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <span className="mr-1">{expanded ? 'Hide Details' : 'View Details'}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
        
        {expanded && (
          <div className="mt-4 bg-gray-50 p-3 rounded-md border-l-4 border-blue-500 text-gray-700 animate-fadeIn">
            <p className="text-sm leading-relaxed">{incident.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncidentCard;