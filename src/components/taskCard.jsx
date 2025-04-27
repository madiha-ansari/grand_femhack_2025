import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <h3 className="font-bold">{task.title}</h3>
      <p className="text-sm">Assigned To: {task.assignedTo?.name || 'Unassigned'}</p>
    </div>
  );
};

export default TaskCard;

// extra code for testing purposes
// functinally dark and light mood
//   <div>
//   <h2>User: {user}</h2>
//   <h2>Theme: {theme}</h2>
//   <button onClick={() => setUser('New User')}>Change User</button>
//   <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
//     Toggle Theme
//   </button>
// </div>