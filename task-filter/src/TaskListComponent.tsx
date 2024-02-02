import React, { useState } from 'react';
import FilterComponent2 from './FilterComponent2';
import AddTaskComponent from './AddTaskComponent';
import FilterComponent from './FilterComponent';

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

  const [filter, setFilter] = useState<{ priorityFilter?: string; completionFilter?: boolean|string  }>({});

  const handleFilterChange = (newFilter: { priorityFilter?: string; completionFilter?: boolean|string}) => {
    setFilter(newFilter);
  };

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    console.log(filter);
  
    if (filter.priorityFilter && task.priority !== filter.priorityFilter) 
      return false;
    
    if (filter.completionFilter !== undefined  && filter.completionFilter !== 'all' && task.completed !== filter.completionFilter) {
      return false;
    }

    
    return true;
  });

  return (
    <div>
           <AddTaskComponent onAddTask={handleAddTask} />
           <hr/>
           <hr/>
      <h2>Task List</h2>
      <FilterComponent2 onFilterChange={handleFilterChange} />
      <p> check one parameter at a time</p>
      <FilterComponent onFilterChange={handleFilterChange} />
  

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