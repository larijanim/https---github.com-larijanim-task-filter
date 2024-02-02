import React, { useState, ChangeEvent } from 'react';

interface AddTaskProps {
  onAddTask: (newTask: Task) => void;
}
// to fix this I need to put task interface in seprated file and import it to what ever component needed it
const AddTaskComponent: React.FC<AddTaskProps> = ({ onAddTask }) => {
const [newTask, setNewTask] = useState({ title: '', priority: 'low', completed: false });

const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: type === 'checkbox' ? (value === 'true' ? true : false) : value,
    }));
};

const handleAddTask = () => {
onAddTask({ ...newTask, id: Date.now() });
setNewTask({ title: '', priority: 'low', completed: false });
};

return (
    <div>
      <h2>Add Task</h2>
      <label>
        Title:
        <input type="text" name="title" value={newTask.title} onChange={handleChange} />
      </label>

      <label>
        Priority:
        <select name="priority" value={newTask.priority} onChange={handleChange}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>

      <label>
        Completed:
        <input
          type="checkbox"
          name="completed"
          checked={newTask.completed}
          onChange={handleChange}
        />
      </label>

      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskComponent;