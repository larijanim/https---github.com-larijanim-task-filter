import React, { ChangeEvent } from 'react';

interface FilterProps {
  onFilterChange: (filters: { priorityFilter?: string; completionFilter?: boolean }) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ onFilterChange }) => {
  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const priorityFilter = e.target.value;
    onFilterChange({ priorityFilter });
  };

  const handleCompletionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const completionFilter = e.target.value === 'true';
    onFilterChange({ completionFilter });
  };

  return (
    <div>
      <h2>Filter Tasks</h2>
      <label>
        Priority:
        <select onChange={handlePriorityChange}>
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>

      <label>
        Completion Status:
        <select onChange={handleCompletionChange}>
          <option value="">All</option>
          <option value="true">Completed</option>
          <option value="false">Not Completed</option>
        </select>
      </label>
    </div>
  );
};

export default FilterComponent;