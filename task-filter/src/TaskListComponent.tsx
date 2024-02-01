import React, { useState } from 'react';
import FilterComponent from './FilterComponent';
import AddTaskComponent from './AddTaskComponent';

interface Task {
  id: number;
  title: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

const TaskListComponent: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Task 1', priority: 'high', completed: false },
    { id: 2, title: 'Task 2', priority: 'low', completed: true },
  ]);

  const [filter, setFilter] = useState<{ priorityFilter?: string; completionFilter?: boolean }>({});

  const handleFilterChange = (newFilter: { priorityFilter?: string; completionFilter?: boolean }) => {
    setFilter(newFilter);
  };

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter.priorityFilter && task.priority !== filter.priorityFilter) {
      return false;
    }

    if (
      typeof filter.completionFilter !== 'undefined' &&
      task.completed !== filter.completionFilter
    ) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <h2>Task List</h2>
      <FilterComponent onFilterChange={handleFilterChange} />
      <AddTaskComponent onAddTask={handleAddTask} />

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {task.title} - Priority: {task.priority} - Completed: {task.completed.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListComponent;