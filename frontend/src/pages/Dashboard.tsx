import { useEffect, useState } from "react";
import api from "../api/axios";
import TaskForm from "../components/Task";

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (data: any) => {
    await api.post("/tasks", data);
    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>

      <TaskForm onCreate={createTask} />

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="p-3 border rounded flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-600">
                {task.description}
              </p>
            </div>
            <button
              onClick={() => deleteTask(task._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
