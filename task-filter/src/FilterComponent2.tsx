import React, { ChangeEvent, useState } from 'react';

interface FilterProps {
  onFilterChange: (filters: { priorityFilter?: string; completionFilter?: boolean | string }) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [priorityFilter, setPriorityFilter] = useState<string>('');
  const [completionFilter, setCompletionFilter] = useState<boolean | string>('');

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newPriorityFilter = e.target.value;
    setPriorityFilter(newPriorityFilter);
    onFilterChange({ priorityFilter: newPriorityFilter, completionFilter });
  };

  const handleCompletionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let newCompletionFilter: boolean | string;

    if (e.target.value === 'true') {
      newCompletionFilter = true;
    } else if (e.target.value === 'false') {
      newCompletionFilter = false;
    } else {
      newCompletionFilter = 'all';
    }

    setCompletionFilter(newCompletionFilter);
    onFilterChange({ priorityFilter, completionFilter: newCompletionFilter });
  };

  return (
    <div>
      <h2>Filter Tasks</h2>
      <label>
        Priority:
        <select onChange={handlePriorityChange} value={priorityFilter}>
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>

      <label>
        Completion Status:
        <select onChange={handleCompletionChange} value={completionFilter.toString()}>
          <option value="">All</option>
          <option value="true">Completed</option>
          <option value="false">Not Completed</option>
        </select>
      </label>
    </div>
  );
};

export default FilterComponent;