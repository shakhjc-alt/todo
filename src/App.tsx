import { useState } from 'react';
import { Trash2 } from 'lucide-react';

interface Task {
  id: string;
  text: string;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: crypto.randomUUID(),
        text: newTask.trim()
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-list">
      <div className="task-input">
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Введите новую задачу"
        />
        <button onClick={addTask}>Добавить</button>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <span>{task.text}</span>
          <button 
            className="delete-btn" 
            onClick={() => deleteTask(task.id)}
            title="Удалить задачу"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
    </div>
  );
}