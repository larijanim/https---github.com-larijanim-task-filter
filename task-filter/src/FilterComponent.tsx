import React, { ChangeEvent } from 'react';

interface FilterProps {
  onFilterChange: (filters: { priorityFilter?: string; completionFilter?: boolean|string }) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ onFilterChange }) => {
  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const priorityFilter = e.target.value;
    onFilterChange({ priorityFilter });
  };

  const handleCompletionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let completionFilter: boolean |string;

  if (e.target.value === "true") {
    completionFilter = true;
  } else if (e.target.value === "false") {
    completionFilter = false;
  } else {
    completionFilter = 'all';
  }

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